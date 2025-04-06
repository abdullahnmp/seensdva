// app/api/webhooks/clerk/route.js
import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server'; // Not explicitly used for type checking here, but good to know it exists
import connectDB from '@/lib/dbConnect'; // Adjust path to your dbConnect utility
import User from '@/models/User'; // Adjust path to your User model
import { NextResponse } from 'next/server';

// Helper function to read the raw body from the request stream
async function buffer(readable) {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}

// Define the allowed providers based on your User model's enum
const ALLOWED_PROVIDERS = ['oauth_google', 'oauth_apple']; // Add other providers if needed

export async function POST(req) {
  // Get the webhook secret from environment variables
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error('Error: CLERK_WEBHOOK_SECRET environment variable not set.');
    // Avoid exposing sensitive error details in production responses
    return new Response('Internal Server Error: Webhook secret not configured', { status: 500 });
  }

  // Get Svix headers for verification
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // Check if essential Svix headers are present
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error('Error: Missing required Svix headers.');
    return new Response('Bad Request: Missing Svix headers', {
      status: 400
    });
  }

  // Read and parse the raw request body
  let payload;
  let bodyString;
  try {
      const rawBody = await buffer(req.body); // Read the raw body buffer
      bodyString = rawBody.toString('utf8');   // Convert buffer to string for verification
      payload = JSON.parse(bodyString);        // Parse the string as JSON to access data
      console.log('Webhook payload received:', JSON.stringify(payload, null, 2)); // Log the payload for debugging
  } catch (err) {
      console.error('Error reading or parsing webhook body:', err);
      return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Initialize Svix Webhook instance
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt; // Declared to hold the verified event

  // Verify the webhook signature
  try {
    // Use the raw string body for verification
    evt = wh.verify(bodyString, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
    console.log('Webhook signature verified successfully.');
  } catch (err) {
    // Log the specific verification error
    console.error('Error verifying webhook signature:', err.message);
    // Return a clear error response
    return new Response('Unauthorized: Webhook signature verification failed', {
      status: 401 // Use 401 for authorization errors
    });
  }

  // Extract event type and data
  const eventType = evt.type;
  const eventData = evt.data; // Contains the user object or deletion info

  console.log(`Received webhook event: Type=${eventType}, ID=${eventData.id || 'N/A'}`);

  // --- Handle 'user.created' event ---
  if (eventType === 'user.created') {
    console.log('Processing user.created event...');
    const { id: clerkId, email_addresses, first_name, last_name, image_url, external_accounts } = eventData;

    // Basic validation for required fields
    if (!clerkId || !email_addresses || email_addresses.length === 0) {
        console.error('Error: Missing required data (clerkId or email) in user.created event payload.');
        return NextResponse.json({ success: false, message: 'Missing required user data' }, { status: 400 });
    }

    // Find the primary email address
    const primaryEmailObject = email_addresses.find(email => email.id === eventData.primary_email_address_id) || email_addresses[0];
    if (!primaryEmailObject || !primaryEmailObject.email_address) {
        console.error('Error: Could not determine primary email address from payload.');
         return NextResponse.json({ success: false, message: 'Primary email address not found' }, { status: 400 });
    }
    const primaryEmail = primaryEmailObject.email_address;

    // Determine the provider from external accounts
    let provider = 'unknown'; // Default if provider cannot be determined
    if (external_accounts && external_accounts.length > 0 && external_accounts[0].provider) {
        const detectedProvider = external_accounts[0].provider; // e.g., "oauth_google"
        // Check if the detected provider is in our allowed list (from the User model enum)
        if (ALLOWED_PROVIDERS.includes(detectedProvider)) {
            provider = detectedProvider;
        } else {
            console.warn(`Detected provider "${detectedProvider}" is not in the allowed list [${ALLOWED_PROVIDERS.join(', ')}]. Using 'unknown'.`);
            // Decide how to handle - you could still use 'unknown' or return an error
            // provider = 'unknown'; // Keep it as unknown or handle differently
        }
    } else {
        console.warn('Could not determine provider from external_accounts. Using "unknown".');
         // If provider is REQUIRED in your schema and unknown is not allowed, this will cause a validation error later
    }

    // Prepare the user data object for MongoDB insertion
    const newUser = {
      clerkId: clerkId,
      email: primaryEmail,
      firstName: first_name || '', // Use empty string if null/undefined
      lastName: last_name || '',  // Use empty string if null/undefined
      photo: image_url || '',     // Use empty string if null/undefined
      provider: provider,
      // isAdmin defaults to false via the Mongoose schema definition
    };

    try {
      await connectDB();
      console.log('Database connected for user creation.');

      // Check for existing user to ensure idempotency
      const existingUser = await User.findOne({ clerkId: newUser.clerkId });
      if (existingUser) {
          console.log(`User with Clerk ID ${newUser.clerkId} already exists. Skipping creation.`);
          // Optional: You might want to update the existing user here if necessary
          return NextResponse.json({ success: true, message: 'User already exists' }, { status: 200 });
      }

      // Create the new user in the database
      const createdUser = await User.create(newUser);
      console.log(`User created successfully: ID=${createdUser._id}, ClerkID=${createdUser.clerkId}, isAdmin=${createdUser.isAdmin}`);
      // Return a success response with the created user data
      return NextResponse.json({ success: true, user: createdUser }, { status: 201 }); // 201 Created

    } catch (error) {
      console.error('Error saving user to MongoDB:', error);
      // Handle specific MongoDB errors
      if (error.name === 'ValidationError') {
          // Extract meaningful message from validation error
          const messages = Object.values(error.errors).map(e => e.message).join(', ');
          return NextResponse.json({ success: false, message: `Validation Error: ${messages}` }, { status: 400 });
      }
      if (error.code === 11000) { // Duplicate key error
          // Determine which field caused the error (e.g., email or clerkId)
          const field = Object.keys(error.keyPattern)[0];
          return NextResponse.json({ success: false, message: `User with this ${field} already exists.` }, { status: 409 }); // 409 Conflict
      }
      // Generic internal server error for other database issues
      return NextResponse.json({ success: false, message: 'Database error during user creation' }, { status: 500 });
    }
  }

  // --- Handle 'user.updated' event ---
  else if (eventType === 'user.updated') {
    console.log('Processing user.updated event...');
    const { id: clerkId, first_name, last_name, image_url, email_addresses } = eventData;

     // Find the primary email if email addresses are provided
    let primaryEmail = null;
    if (email_addresses && email_addresses.length > 0) {
        const primaryEmailObject = email_addresses.find(email => email.id === eventData.primary_email_address_id) || email_addresses[0];
         if (primaryEmailObject) {
            primaryEmail = primaryEmailObject.email_address;
        }
    }

    // Prepare the update data object, only including fields that are present in the payload
    const updateData = {};
    if (first_name !== undefined) updateData.firstName = first_name || '';
    if (last_name !== undefined) updateData.lastName = last_name || '';
    if (image_url !== undefined) updateData.photo = image_url || '';
    if (primaryEmail !== null) updateData.email = primaryEmail; // Update email only if found

    // Add any other fields you want to update from the payload
    // e.g., updateData.username = eventData.username; (if you add username back)

    // Check if there's actually anything to update
    if (Object.keys(updateData).length === 0) {
        console.log(`No relevant fields to update for user ${clerkId}.`);
        return NextResponse.json({ success: true, message: 'No fields to update' }, { status: 200 });
    }

    // Optionally manually set updatedAt if not using schema timestamps: true
    // updateData.updatedAt = new Date();

    try {
        await connectDB();
        console.log(`Database connected for updating user ${clerkId}.`);
        const updatedUser = await User.findOneAndUpdate(
            { clerkId: clerkId }, // Find user by Clerk ID
            { $set: updateData }, // Apply the updates
            { new: true, runValidators: true } // Return the updated document and run schema validators
        );

        if (!updatedUser) {
            console.log(`User with Clerk ID ${clerkId} not found for update.`);
            // Consider if you should create the user if they don't exist during an update event
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        console.log(`User updated successfully: ID=${updatedUser._id}`);
        return NextResponse.json({ success: true, user: updatedUser }, { status: 200 });
    } catch (error) {
        console.error(`Error updating user ${clerkId} in MongoDB:`, error);
        if (error.name === 'ValidationError') {
             const messages = Object.values(error.errors).map(e => e.message).join(', ');
            return NextResponse.json({ success: false, message: `Validation Error: ${messages}` }, { status: 400 });
        }
         if (error.code === 11000) { // Handle potential unique constraint errors on update
            const field = Object.keys(error.keyPattern)[0];
            return NextResponse.json({ success: false, message: `Update failed: ${field} already exists.` }, { status: 409 });
        }
        return NextResponse.json({ success: false, message: 'Database error during user update' }, { status: 500 });
    }
}

  // --- Handle 'user.deleted' event ---
  else if (eventType === 'user.deleted') {
    console.log('Processing user.deleted event...');
    // Sometimes the full user object is not sent, only the ID and a 'deleted' flag.
    const { id: clerkId, deleted } = eventData;

    // IMPORTANT: Check if this is a real deletion event.
    // Clerk might send this for soft deletes unless configured otherwise.
    // Relying on `deleted: true` if present is safer.
    if (!clerkId) {
         console.error('Error: Missing clerkId in user.deleted event payload.');
        return NextResponse.json({ success: false, message: 'Missing user ID for deletion' }, { status: 400 });
    }
    // Optional: Check the 'deleted' flag if you only want to act on hard deletes.
    // if (deleted !== true) {
    //     console.log(`Skipping potential soft deletion for Clerk ID ${clerkId}.`);
    //     return NextResponse.json({ success: true, message: 'Soft deletion ignored' }, { status: 200 });
    // }

    try {
        await connectDB();
        console.log(`Database connected for deleting user ${clerkId}.`);
        const result = await User.deleteOne({ clerkId: clerkId }); // Delete user by Clerk ID

        if (result.deletedCount === 0) {
            console.log(`User with Clerk ID ${clerkId} not found for deletion.`);
            // It's often okay to return success even if not found, as the desired state (user gone) is achieved.
            return NextResponse.json({ success: true, message: 'User not found, but deletion request processed' }, { status: 200 }); // Or 404 if you prefer
        }

        console.log(`User with Clerk ID ${clerkId} deleted successfully from database.`);
        return NextResponse.json({ success: true, message: 'User deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error(`Error deleting user ${clerkId} from MongoDB:`, error);
        return NextResponse.json({ success: false, message: 'Database error during user deletion' }, { status: 500 });
    }
}

  // --- Event type not handled ---
  else {
    console.log(`Webhook event type ${eventType} not handled.`);
  }

  // Acknowledge receipt of the webhook event to Clerk
  return new Response('Webhook received', { status: 200 });
}
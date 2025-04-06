// app/api/webhooks/clerk/route.js
import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import connectDB from '@/lib/dbConnect'; // Adjust path if needed
import User from '@/models/User'; // Adjust path if needed
import { NextResponse } from 'next/server';

// Function to safely parse JSON
async function buffer(readable) {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}

export async function POST(req) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error('Error: CLERK_WEBHOOK_SECRET not found in environment variables.'); // Log message in English
    return new Response('Webhook Secret not configured', { status: 500 });
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error('Error: Missing svix headers'); // Log message in English
    return new Response('Error occurred -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  // Note: Vercel has issues parsing req.json() directly with webhooks currently.
  // Using buffer is a workaround.
  let payload;
  let body;
  try {
      const rawBody = await buffer(req.body); // Read the raw body
      body = rawBody.toString('utf8'); // Convert buffer to string
      payload = JSON.parse(body); // Parse the string as JSON
  } catch (err) {
      console.error('Error parsing webhook body:', err); // Log message in English
      return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }


  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, { // Verify using the string body
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error('Error verifying webhook:', err); // Log message in English
    return new Response('Error occurred during webhook verification', {
      status: 400
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`); // Log message in English
  // console.log('Webhook body:', JSON.stringify(payload, null, 2)); // Log the full body for debugging

  // --- Handle the specific webhook event ---

  if (eventType === 'user.created') {
    console.log('Processing user.created event...'); // Log message in English
    const { id: clerkId, email_addresses, first_name, last_name, image_url, username } = evt.data;

    if (!clerkId || !email_addresses || email_addresses.length === 0) {
        console.error('Error: Missing required data in user.created event'); // Log message in English
        return NextResponse.json({ success: false, message: 'Missing required data' }, { status: 400 });
    }

    // Assuming the primary email is the one to use
    const primaryEmail = email_addresses.find(email => email.id === evt.data.primary_email_address_id) || email_addresses[0];

    const newUser = {
      clerkId: clerkId,
      email: primaryEmail.email_address,
      username: username, // Clerk might provide username
      firstName: first_name,
      lastName: last_name,
      photo: image_url,
      // Set default role or other fields here if needed
      role: 'user',
    };

    try {
      await connectDB();
      console.log('Database connected for user creation.'); // Log message in English

      // Check if user already exists (optional, but good practice for idempotency)
      const existingUser = await User.findOne({ clerkId: newUser.clerkId });
      if (existingUser) {
          console.log(`User with Clerk ID ${newUser.clerkId} already exists. Skipping creation.`); // Log message in English
          return NextResponse.json({ success: true, message: 'User already exists' }, { status: 200 });
      }

      // Create the user in MongoDB
      const createdUser = await User.create(newUser);
      console.log(`User created successfully: ${createdUser._id}`); // Log message in English
      return NextResponse.json({ success: true, user: createdUser }, { status: 201 });

    } catch (error) {
      console.error('Error creating user in MongoDB:', error); // Log message in English
      // Check for duplicate key error (e.g., if unique constraint fails)
      if (error.code === 11000) {
          return NextResponse.json({ success: false, message: 'User with this Clerk ID or Email already exists.' }, { status: 409 }); // 409 Conflict
      }
      return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
  }

  // --- Handle other events like user.updated or user.deleted ---
  if (eventType === 'user.updated') {
    console.log('Processing user.updated event...'); // Log message in English
    const { id: clerkId, first_name, last_name, image_url, username, email_addresses } = evt.data;

    const primaryEmail = email_addresses?.find(email => email.id === evt.data.primary_email_address_id) || email_addresses?.[0];


    const updateData = {};
    if (first_name !== undefined) updateData.firstName = first_name;
    if (last_name !== undefined) updateData.lastName = last_name;
    if (image_url !== undefined) updateData.photo = image_url;
    if (username !== undefined) updateData.username = username;
     if (primaryEmail?.email_address) updateData.email = primaryEmail.email_address; // Update email if provided

    // Ensure there's something to update
    if (Object.keys(updateData).length === 0) {
        console.log('No relevant fields to update.'); // Log message in English
        return NextResponse.json({ success: true, message: 'No fields to update' }, { status: 200 });
    }

    updateData.updatedAt = new Date(); // Manually set updatedAt if not using schema timestamps: true

    try {
        await connectDB();
        console.log('Database connected for user update.'); // Log message in English
        const updatedUser = await User.findOneAndUpdate(
            { clerkId: clerkId },
            { $set: updateData },
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            console.log(`User with Clerk ID ${clerkId} not found for update.`); // Log message in English
            // Optionally, you could try creating the user here if they should exist
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        console.log(`User updated successfully: ${updatedUser._id}`); // Log message in English
        return NextResponse.json({ success: true, user: updatedUser }, { status: 200 });
    } catch (error) {
        console.error('Error updating user in MongoDB:', error); // Log message in English
         if (error.code === 11000) { // Handle potential unique constraint errors on update
            return NextResponse.json({ success: false, message: 'Update failed due to unique constraint (e.g., duplicate username/email).' }, { status: 409 });
        }
        return NextResponse.json({ success: false, message: 'Internal Server Error during update' }, { status: 500 });
    }
}

if (eventType === 'user.deleted') {
    console.log('Processing user.deleted event...'); // Log message in English
    const { id: clerkId, deleted } = evt.data; // Clerk might send `deleted: true`

    // Important: Clerk might send deletion webhooks even for soft deletes.
    // Check the 'deleted' flag if present, or decide if you want to hard delete regardless.
    if (!clerkId || deleted !== true) { // Only proceed if it's a confirmed hard delete from Clerk's payload
        console.log(`Skipping deletion for Clerk ID ${clerkId} as it might be a soft delete or ID is missing.`); // Log message in English
        return NextResponse.json({ success: true, message: 'Deletion skipped (soft delete or missing ID)' }, { status: 200 });
    }


    try {
        await connectDB();
        console.log('Database connected for user deletion.'); // Log message in English
        const result = await User.deleteOne({ clerkId: clerkId });

        if (result.deletedCount === 0) {
            console.log(`User with Clerk ID ${clerkId} not found for deletion.`); // Log message in English
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        console.log(`User with Clerk ID ${clerkId} deleted successfully.`); // Log message in English
        return NextResponse.json({ success: true, message: 'User deleted' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting user from MongoDB:', error); // Log message in English
        return NextResponse.json({ success: false, message: 'Internal Server Error during deletion' }, { status: 500 });
    }
}


  // If the webhook event is not handled, return a success response
  // so Clerk knows the webhook was received.
  console.log(`Unhandled event type: ${eventType}`); // Log message in English
  return new Response('', { status: 200 });
}
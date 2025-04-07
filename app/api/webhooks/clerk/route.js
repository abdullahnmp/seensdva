import { Webhook } from 'svix';
import { headers } from 'next/headers';
import connectDB from '@/lib/dbConnect';
import User from '@/models/User';
import { NextResponse } from 'next/server';

async function buffer(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

const ALLOWED_PROVIDERS = ['oauth_google', 'oauth_apple'];

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error('Error: CLERK_WEBHOOK_SECRET environment variable not set.');
    return new Response('Internal Server Error: Webhook secret not configured', { status: 500 });
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error('Error: Missing required Svix headers.');
    return new Response('Bad Request: Missing Svix headers', { status: 400 });
  }

  let payload;
  let bodyString;
  try {
    const rawBody = await buffer(req.body);
    bodyString = rawBody.toString('utf8');
    payload = JSON.parse(bodyString);
    console.log('Webhook payload received:', JSON.stringify(payload, null, 2));
  } catch (err) {
    console.error('Error reading or parsing webhook body:', err);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;

  try {
    evt = wh.verify(bodyString, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
    console.log('Webhook signature verified successfully.');
  } catch (err) {
    console.error('Error verifying webhook signature:', err.message);
    return new Response('Unauthorized: Webhook signature verification failed', { status: 401 });
  }

  const eventType = evt.type;
  const eventData = evt.data;

  console.log(`Received webhook event: Type=${eventType}, ID=${eventData.id || 'N/A'}`);

  if (eventType === 'user.created') {
    console.log('Processing user.created event...');
    const { id: clerkId, email_addresses, first_name, last_name, image_url, external_accounts } = eventData;

    if (!clerkId || !email_addresses || email_addresses.length === 0) {
      console.error('Error: Missing required data (clerkId or email) in user.created event payload.');
      return NextResponse.json({ success: false, message: 'Missing required user data' }, { status: 400 });
    }

    const primaryEmailObject = email_addresses.find(email => email.id === eventData.primary_email_address_id) || email_addresses[0];
    if (!primaryEmailObject || !primaryEmailObject.email_address) {
      console.error('Error: Could not determine primary email address from payload.');
      return NextResponse.json({ success: false, message: 'Primary email address not found' }, { status: 400 });
    }
    const primaryEmail = primaryEmailObject.email_address;

    let provider = 'unknown';
    if (external_accounts && external_accounts.length > 0 && external_accounts[0].provider) {
      const detectedProvider = external_accounts[0].provider;
      if (ALLOWED_PROVIDERS.includes(detectedProvider)) {
        provider = detectedProvider;
      } else {
        console.warn(`Invalid provider "${detectedProvider}" detected. Setting to 'unknown'.`);
      }
    } else {
      console.warn('No provider detected in external_accounts.');
    }

    const newUser = {
      clerkId: clerkId,
      email: primaryEmail,
      firstName: first_name || '',
      lastName: last_name || '',
      photo: image_url || '',
      provider: provider,
    };

    try {
      await connectDB();
      console.log('Database connected for user creation.');

      const existingUser = await User.findOne({ clerkId: newUser.clerkId });
      if (existingUser) {
        console.log(`User with Clerk ID ${newUser.clerkId} already exists.`);
        return NextResponse.json({ success: true, message: 'User already exists' }, { status: 200 });
      }

      console.log('Attempting to create user:', newUser); // নতুন লগ যোগ করা
      const createdUser = await User.create(newUser);
      console.log(`User created successfully: ID=${createdUser._id}, ClerkID=${createdUser.clerkId}, isAdmin=${createdUser.isAdmin}`);
      return NextResponse.json({ success: true, user: createdUser }, { status: 201 });
    } catch (error) {
      console.error('Detailed error saving user to MongoDB:', error.stack); // stack যোগ করা
      if (error.name === 'ValidationError') {
        const messages = Object.values(error.errors).map(e => e.message).join(', ');
        return NextResponse.json({ success: false, message: `Validation Error: ${messages}` }, { status: 400 });
      }
      if (error.code === 11000) {
        const field = Object.keys(error.keyPattern)[0];
        return NextResponse.json({ success: false, message: `User with this ${field} already exists.` }, { status: 409 });
      }
      return NextResponse.json({ success: false, message: 'Database error during user creation' }, { status: 500 });
    }
  }

  else if (eventType === 'user.updated') {
    console.log('Processing user.updated event...');
    const { id: clerkId, first_name, last_name, image_url, email_addresses } = eventData;

    let primaryEmail = null;
    if (email_addresses && email_addresses.length > 0) {
      const primaryEmailObject = email_addresses.find(email => email.id === eventData.primary_email_address_id) || email_addresses[0];
      if (primaryEmailObject) {
        primaryEmail = primaryEmailObject.email_address;
      }
    }

    const updateData = {};
    if (first_name !== undefined) updateData.firstName = first_name || '';
    if (last_name !== undefined) updateData.lastName = last_name || '';
    if (image_url !== undefined) updateData.photo = image_url || '';
    if (primaryEmail !== null) updateData.email = primaryEmail;

    if (Object.keys(updateData).length === 0) {
      console.log(`No relevant fields to update for user ${clerkId}.`);
      return NextResponse.json({ success: true, message: 'No fields to update' }, { status: 200 });
    }

    try {
      await connectDB();
      console.log(`Database connected for updating user ${clerkId}.`);
      const updatedUser = await User.findOneAndUpdate(
        { clerkId: clerkId },
        { $set: updateData },
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        console.log(`User with Clerk ID ${clerkId} not found for update.`);
        return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
      }

      console.log(`User updated successfully: ID=${updatedUser._id}`);
      return NextResponse.json({ success: true, user: updatedUser }, { status: 200 });
    } catch (error) {
      console.error(`Error updating user ${clerkId} in MongoDB:`, error.stack); // stack যোগ করা
      if (error.name === 'ValidationError') {
        const messages = Object.values(error.errors).map(e => e.message).join(', ');
        return NextResponse.json({ success: false, message: `Validation Error: ${messages}` }, { status: 400 });
      }
      if (error.code === 11000) {
        const field = Object.keys(error.keyPattern)[0];
        return NextResponse.json({ success: false, message: `Update failed: ${field} already exists.` }, { status: 409 });
      }
      return NextResponse.json({ success: false, message: 'Database error during user update' }, { status: 500 });
    }
  }

  else if (eventType === 'user.deleted') {
    console.log('Processing user.deleted event...');
    const { id: clerkId, deleted } = eventData;

    if (!clerkId) {
      console.error('Error: Missing clerkId in user.deleted event payload.');
      return NextResponse.json({ success: false, message: 'Missing user ID for deletion' }, { status: 400 });
    }

    try {
      await connectDB();
      console.log(`Database connected for deleting user ${clerkId}.`);
      const result = await User.deleteOne({ clerkId: clerkId });

      if (result.deletedCount === 0) {
        console.log(`User with Clerk ID ${clerkId} not found for deletion.`);
        return NextResponse.json({ success: true, message: 'User not found, but deletion request processed' }, { status: 200 });
      }

      console.log(`User with Clerk ID ${clerkId} deleted successfully from database.`);
      return NextResponse.json({ success: true, message: 'User deleted successfully' }, { status: 200 });
    } catch (error) {
      console.error(`Error deleting user ${clerkId} from MongoDB:`, error.stack); // stack যোগ করা
      return NextResponse.json({ success: false, message: 'Database error during user deletion' }, { status: 500 });
    }
  }

  else {
    console.log(`Webhook event type ${eventType} not handled.`);
  }

  return new Response('Webhook received', { status: 200 });
}
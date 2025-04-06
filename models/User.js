// models/User.js
import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: [true, 'Clerk User ID is required'], // Validation message in English
    unique: true, // Ensure Clerk IDs are unique in your database
    index: true,  // Index for faster lookups
  },
  email: {
    type: String,
    required: [true, 'Email is required'], // Validation message in English
    unique: true, // Ensure emails are unique
    lowercase: true,
    trim: true,
  },
  firstName: { // Will come from Google/Apple profile
    type: String,
    trim: true,
  },
  lastName: { // Will come from Google/Apple profile (might be null/empty)
    type: String,
    trim: true,
  },
  photo: { // Will come from Google/Apple profile
    type: String, // URL of the profile photo
  },
  provider: { // To track how the user signed up (optional but helpful)
    type: String,
    enum: ['oauth_google', 'oauth_apple'], // Possible providers based on your setup
    required: true, // Make it required if you want to always track the provider
  },
  isAdmin: { // <<<--- NEW: isAdmin property
    type: Boolean,
    default: false, // Default value is false
  },
  // Add any other fields specific to your application needs
  // e.g., preferences, saved events, etc.

}, {
  timestamps: true // Automatically manage createdAt and updatedAt timestamps
});

// Avoid redefining the model if it already exists (important for Next.js hot reloading)
export default mongoose.models.User || mongoose.model('User', UserSchema);
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
  username: { // You might get this from Clerk or allow users to set it later
    type: String,
    unique: true,
    sparse: true, // Allows multiple null values but unique non-null values
    trim: true,
  },
  firstName: { // Optional: get from Clerk if available
    type: String,
    trim: true,
  },
  lastName: { // Optional: get from Clerk if available
    type: String,
    trim: true,
  },
  photo: { // Optional: get from Clerk if available
    type: String, // URL of the profile photo
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // Add any other fields you want to store for your user
  // e.g., roles, preferences, etc.
  role: {
    type: String,
    enum: ['user', 'admin'], // Example roles
    default: 'user',
  }
}, {
  timestamps: true // Automatically manage createdAt and updatedAt timestamps
});

// Avoid redefining the model if it already exists (important for Next.js hot reloading)
export default mongoose.models.User || mongoose.model('User', UserSchema);
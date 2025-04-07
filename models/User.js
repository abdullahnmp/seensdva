import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: [true, 'Clerk User ID is required'],
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  photo: {
    type: String,
  },
  provider: {
    type: String,
    enum: ['oauth_google', 'oauth_apple', 'unknown'], // 'unknown' যোগ করা
    default: 'unknown', // ডিফল্ট মান হিসেবে 'unknown'
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
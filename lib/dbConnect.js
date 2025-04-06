// lib/dbConnect.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    console.log('🚀 Using cached MongoDB connection'); // Log message in English
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Disable mongoose buffering
      // Add other mongoose connection options if needed
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log('✅ New MongoDB connection established'); // Log message in English
      return mongooseInstance;
    }).catch(error => {
        console.error('❌ MongoDB connection error:', error); // Log message in English
        cached.promise = null; // Reset promise on error
        throw error; // Re-throw error to indicate connection failure
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null; // Reset promise if await fails
    throw e;
  }

  return cached.conn;
}

export default connectDB;
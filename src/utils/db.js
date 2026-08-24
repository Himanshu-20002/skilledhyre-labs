import mongoose from "mongoose";

const MONGODB_URI = process.env.NEW_MONGODB_URI || process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || "blogs_news";

if (!MONGODB_URI) {
  throw new Error("Please define NEW_MONGODB_URI or MONGODB_URI in .env");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: MONGODB_DB,
      })
      .then((mongoose) => {
        console.log("[db] Connected to database successfully");
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

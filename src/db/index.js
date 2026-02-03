import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI)
      throw new Error(
        "Please provide MONGODB_URI in the environment variables"
      );
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: DB_NAME,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;

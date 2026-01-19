import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.log("Server Failed To Start", error);
      process.exit(1);
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Server Failed To Start", error);
    process.exit(1);
  }
};

startServer();

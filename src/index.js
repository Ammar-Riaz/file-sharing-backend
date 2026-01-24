import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.log("Server Failed To Start", error);
      process.exit(1);
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Server Failed To Start", error);
    process.exit(1);
  }
};

startServer();

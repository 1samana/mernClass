import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const url = "mongodb://127.0.0.1:27017/library-class";
    await mongoose.connect(url);
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;

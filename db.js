import mongoose from "mongoose";
import dotenv from "dotenv";

// configuring the dotenv to get data from env
dotenv.config();

// connecting to mongodb function
export function dataBaseConnection() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is Connected.");
  } catch (error) {
    console.log("MongoDB Connection Error : " + error);
  }
}

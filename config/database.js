import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = () => {
  mongoose
    .connect(process.env.DBURL)
    .then(() => {
      console.log("Connected with Database..");
    })
    .catch((err) => {
      console.log("Connection failed ! " + err);
    });
};

export default connectDb;

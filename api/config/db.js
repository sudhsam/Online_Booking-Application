import mongoose from "mongoose";

const Connection = () => {
  const MONGO_DB = process.env.MONGO_DB;
  try {
    mongoose.connect(MONGO_DB, {
      useNewUrlParser: true,
      // useUnifiedTopology: "true",
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log(`Error while connecting with the database`, error.message);
  }
};
export default Connection;

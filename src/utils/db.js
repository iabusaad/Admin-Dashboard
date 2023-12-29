import mongoose from "mongoose";

 const ConnectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dashboard:11223344@cluster0.76fjkr4.mongodb.net/"
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default ConnectToDb;
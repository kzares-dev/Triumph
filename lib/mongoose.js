import mongoose from "mongoose";

let isConnected = false //check if mongoose is connected

const MONGODB_URL = "mongodb+srv://kzaresdev:YYn0m2c7vv4uKcoq@triumph.8o0lenl.mongodb.net/?retryWrites=true&w=majority"
export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(!MONGODB_URL) return console.log("MONGODB_URL not found");
  if(isConnected) return console.log("Alredy connected do MongoDB");

  try{
    await mongoose.connect(MONGODB_URL);

    isConnected = true;

    console.log("Connected to MongoDB")
  }catch (error) {
    console.log(error)
  }

}
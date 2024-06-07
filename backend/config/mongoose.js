// Dotenv definition
import dotenv from 'dotenv';
dotenv.config(".env");

import mongoose from "mongoose";

const url = process.env.MONGODB_URL;

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to Mongoose");
    }catch(err) {
        console.log("Something is wrong: " + err);
    }
}


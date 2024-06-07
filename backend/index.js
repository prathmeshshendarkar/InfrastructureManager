// Dotenv definition
import dotenv from 'dotenv';
dotenv.config(".env");

// External Modules import
import express from 'express';

// Internal Modules import
import { connectToMongoDB } from './config/mongoose.js';
import { otpCreate, otpVerify } from './utils/otp.js';

// Instance of Backend server
const server = express();

// Database Connection
connectToMongoDB();


// Main Routes Definition
server.get('/', (req, res, next) => {
    res.send("Hello World").status(200);
})

// OTP Creation
// otpCreate();

// OTP Verification
// otpVerify('027916');

// Port listening
server.listen(process.env.PORT, () => {
    console.log(`Server connected on port ` + process.env.PORT);
})

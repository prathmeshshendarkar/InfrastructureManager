import dotenv from 'dotenv';
dotenv.config(".env");
import twilio from 'twilio';

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const twilioService = process.env.TWILIO_SERVICE;

const twilioClient = twilio(accountSid, authToken);

export const otpCreate = async (inputNumber) => {
    try {
        const verificationChecks = await twilioClient.verify.v2.services(twilioService).verifications.create({
            to: '+918879938538', 
            channel: 'sms'
        });

        console.log("Message sent successfully");
        console.log(verificationChecks.sid);
    }catch(err){
        console.log(err);
    }
}


export const otpVerify = async (otpCode) => {
    try {
        const verificationChecks = await twilioClient.verify.v2.services(twilioService).verificationChecks.create({
            to: '+918879938538', 
            code: otpCode,
        })

        console.log("OTP Verified Successfully");
        console.log(verificationChecks.status);
    }catch(err){
        console.log("Something wrong with the message verification: " + err);
    }
}
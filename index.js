import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()
dotenv.config()


const connect = async () => {
    try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Successfully Connected to mongoDB!");
} catch (error) {
    // throw new Error("Mongodb not connected");
    // or
    throw error;   
}
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB Disconnected!");
});

mongoose.connection.on("connected", () => {
    console.log("mongoDB Connected!");
});


app.listen(8800, () => {
    connect()
    console.log("Connected to backend!")
});
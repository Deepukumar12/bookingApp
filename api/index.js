
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";




const app = express()
dotenv.config()


// mongoDB connection
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

// mongoose.connection.on("connected", () => {
//     console.log("mongoDB Connected!");
// });


// how api works
app.get("/users", (req, res) => {
    res.send("hello first request!");
});



// middlewares


app.use(express.json());


app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/hotels", hotelsRoute);
app.use("/api/v1/rooms", roomsRoute);


app.use((err, req, res, next) => {
    // console.log("hi, i am a middleware");
    // res.send("hello from middleware");
    // next();

    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});




app.listen(8800, () => {
    connect()
    console.log("Connected to backend!")
});
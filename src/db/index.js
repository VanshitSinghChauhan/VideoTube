import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `\n MongoDB Connected Successfully!! ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED: ", error);
        throw error;
    }
};
export default connectDB;

//Another method to connect mongo db is use this code directly in main index.js// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";

// const app = express()
/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Express is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("Error: ", error);
        throw error;
    }
})();
*/

import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({path:'./.env'});
import connect from "./db/dbconnect.js";


connect?
app.listen(process.env.PORT||8000,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
:console.log("Error in connecting to MongoDB");


// connect();
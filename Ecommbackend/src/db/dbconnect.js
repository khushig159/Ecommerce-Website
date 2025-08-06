import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path:'../.env'});

// console.log(process.env.MONGODB_URL);

const connect=mongoose.connect(process.env.MONGODB_URL).then(()=>{console.log("MongoDB connected")}).catch(err => console.log(err));
// console.log(connect);
export default connect;
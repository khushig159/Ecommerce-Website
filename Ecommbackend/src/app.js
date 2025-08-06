import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({path:'./.env'});


const app=express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials:true
}))
app.use(express.json({limit:"16kb"}));
app.use(urlencoded({extended:true,limit:"16kb"}));
app.use(cookieParser());

//routes
import userRouter from "./routes/user.routes.js";
import productrouter from "./routes/products.routes.js";
import orderrouter from "./routes/order.routes.js"

//routes declaration
app.use("/user",userRouter)
app.use("/products",productrouter)
app.use("/order",orderrouter)

export default app;
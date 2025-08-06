import express from "express";
import User from "../models/usermodel.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const generateAccessandRefreshToken = async (userId)=>{
    try {
        const user = await User.findById(userId);
        const accesstoken = await user.createAccessToken();
        const refreshtoken = await user.createRefreshToken();

        user.refreshToken=refreshtoken;
        await user.save();

        return {accesstoken,refreshtoken}
    } catch (error) {
        res.status(500).json({message:"Error in generating tokens"});
    }
};


const registerUser= async (req,res)=>{

    // body se info nikalo
    // validation -not empty, email format, password length
    // check for existing user
    // create user
    // check for user
    // remove password and refresh token from res
    // send access token in cookies
    // username?.trim()===""

    const {username, email, password} = req.body;
    console.log(username,email,password);

    if(!username || !email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    if(password.length<8){
        return res.status(400).json({message:"Password must be atleast 8 characters long"}
        );
    }

    const existedUser = await User.findOne({
        email
    })

    if(existedUser){
        return res.status(409).json({message:"User already exists try using different email"});
    }

    const user = await User.create({
        username,
        email,
        password
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );
    if(!createdUser){
        return res.status(500).json({message:"Error in creating user"});
    }

    res.status(200).json({
        message:"User registered",
        user:createdUser,
    });
    
}

const loginUser= async (req,res)=>{
    const {username,email,password} = req.body;
    if(!email){
        return res.status(400).json({message:"Username or Email is required"});
    }

    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({message:"User not found"});
    }

    if(!password){
        return res.status(400).json({message:"Password is required"});
    }

   const ispasswordvalid =  await user.isPasswordCorrect(password);

   if(!ispasswordvalid){
       return res.status(401).json({message:"Invalid credentials"});
   }

   const {accesstoken,refreshtoken} = await generateAccessandRefreshToken(user._id);
   const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
    
    const options={
        httpOnly:true,
        secure:true
    }

    return res
    .status(200)
    .cookie("accessToken",accesstoken,options)
    .cookie("refreshToken",refreshtoken,options)
    .json({
        message:"User logged in",
        user: loggedInUser,
        accesstoken,
        refreshtoken
    }); 
}

const logout= async(req,res)=>{
    try {
        await User.findByIdAndUpdate(req.user._id,
            {
                refreshToken:""
            },
            {new:true}
        );
    
        const options={
            httpOnly:true,
            secure:true
        }
    
        return res
        .status(200)
        .clearCookie("accessToken",options)
        .clearCookie("refreshToken",options)
        .json({message:"User logged out"});
    } catch (error) {
        return res.status(500).json({message:"Error in logging out"});
        
    }
}



export {registerUser, loginUser, logout}; 
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const userSchema=mongoose.Schema({
    
        username:{
                type:String,
                required:true,
                trim:true,
                minlength:3,
                // unique:true,
                index:true
        },
        email:{
                type:String,
                required:true,
                unique:true,
                trim:true,
                minlength:3,
        },
        password:{
                type:String,
                required:[true,'Password is required'],
                trim:true,
                minlength:8,
        },
        refreshToken:{
            type:String,
        }
    
},
{
        timestamps:true,
}
);

userSchema.pre("save", async function(next){
        if(!this.isModified("password")){
                return next();
        }
        this.password=await bcrypt.hash(this.password,10);
        next();
})

userSchema.methods.isPasswordCorrect=async function(password){
        return await bcrypt.compare(password,this.password);
}

userSchema.methods.createAccessToken=async function(){
        return jwt.sign(
                {
                        username:this.username,
                        email:this.email,
                        _id:this._id,

                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: process.env.ACCESS_TOKEN_EXPIRY}
        );
}

userSchema.methods.createRefreshToken=async function(){
        return jwt.sign(
                {
                        _id:this._id,

                },
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: process.env.REFRESH_TOKEN_EXPIRY}
        );
}

const User=mongoose.model('User',userSchema);

export default User;
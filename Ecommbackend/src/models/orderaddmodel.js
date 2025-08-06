import mongoose, { Schema, Types } from "mongoose";

const orderAddSchema=new mongoose.Schema({
    userid: {
    type:Schema.Types.ObjectId,
    ref:"User"
    },
    mobileNo:{
        type:Number,
        length:10
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:Number
    },
    address:{
        type:String,
        required:true
    }

},
{
    timestamps:true
})

const OrderAdd=mongoose.model("OrderAdd",orderAddSchema)
export default OrderAdd
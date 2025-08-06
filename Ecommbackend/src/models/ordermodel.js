import mongoose, { Schema } from "mongoose";

const orderSchema=new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    productids:{
        type: [Schema.Types.ObjectId],
        ref:"Product",
        required: true,
    },
    orderid:{
        type: String,
        required: true,
    }, 
    transactionid:{
        type: String,
        required: true,
    }, 
    signature:{
        type: String,
        required: true,
    }, 
    orderamount:{
        type: Number,
        required: true,
    }

},
{timestamps:true})

const Order=mongoose.model("Order",orderSchema)
export default Order
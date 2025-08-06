import Razorpay from "razorpay";
import OrderAdd from "../models/orderaddmodel.js"
import Order from "../models/Ordermodel.js"

const submitorder=async (req,res)=>{
    try {
        const {mobileNo,city,state,pincode,address,products,options}=req.body
        const orderuser = req.orderuser;
        // console.log(orderuser)
        if(!mobileNo && !city && !state && !pincode && !address && !products){
            console.log("Every field is required")
            res.status(401).json({message:"Every field is required"})
        }
    
        const orderadd=await OrderAdd.create({
            userid:orderuser._id,
            mobileNo,
            city,
            state,
            pincode,
            address
        })
         console.log(orderadd)
        if(!orderadd){
            res.status(500).json({message:"Something went wrong in registering orderaddress"})
        }
        
        const razorpay=new Razorpay({
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_SECRET,
        })
        
        const razororder=await razorpay.orders.create(options)
        console.log(razororder)
        if(!razororder){
            res.status(500).json({message:"Something went wrong in creating razorpay order"})
        }
    
    
    
        // const order=await Order.create({
        //     userid:orderuser._id,
        //     productids:products
        // })
    
        // if(!order){
        //     res.status(500).json({message:"Something went wrong in creating order"})
        // }
    
        res.status(200).json(razororder)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
        
    }
}

const feedorderdb=async (req,res)=>{
    try {
        const {products, orderid, transactionid, signature, orderamount} = req.body
        const orderuser = req.orderuser;
    
        const order=await Order.create({
                userid:orderuser._id,
                productids:products,
                orderid,
                transactionid,
                signature,
                orderamount
            })
        
            if(!order){
                res.status(500).json({message:"Something went wrong in creating order"})
            }
            res.status(200).json({message:"Order placed successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
}
export {submitorder,feedorderdb}


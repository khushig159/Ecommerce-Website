import Product from "../models/productmodel.js"

const getproducts= async (req,res)=>{
    try {
        const product = await Product.find().select("productName productCategory productImage productPrice productDescription");
    
        // const product=await Product.find();
        if(!product){
            return res.status(404).json({message:"Error in loading products"});
        }
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
        
    }
}

const getcamera=async (req,res)=>{
    try {
        const camera=await Product.find({productCategory:"Camera"});
        if(!camera){
            return res.status(504).json({message:"Error in loading cameras"})
    
        }
        res.status(200).json(camera);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
        
    }
}

const getlaptop=async (req,res)=>{
    try {
        const laptop=await Product.find({productCategory:"Laptop"});
        if(!laptop){
            return res.status(504).json({message:"Error in loading laptops"})
    
        }
        res.status(200).json(laptop);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
        
    }
}

const getstorage=async (req,res)=>{
    try {
        const storage=await Product.find({productCategory:"Storage Device"});
        if(!storage){
            return res.status(504).json({message:"Error in loading storage devices"})
    
        }
        res.status(200).json(storage);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
        
    }
}

const getprinter=async (req,res)=>{
    try {
        const printer=await Product.find({productCategory:"Printer"});
        if(!printer){
            return res.status(504).json({message:"Error in loading printers"})
    
        }
        res.status(200).json(printer);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
        
    }
}

export {getproducts,getcamera,getlaptop,getstorage,getprinter};
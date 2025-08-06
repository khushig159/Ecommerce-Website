import mongoose,{Schema} from "mongoose";

const productSchema = new Schema({
    productName:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        index:true
    },
    productDescription:{
        type:Object,
        required:true,
        trim:true,
        minlength:3,
    },
    productPrice:{
        type:String,
        required:true,
    },
    productCategory:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
    },
    productImage: {
        type: [String], // Array of Cloudinary URLs
        required: true,
        validate: {
            validator: function (images) {
                return Array.isArray(images) && images.length > 0;
            },
            message: "At least one product image is required."
        }
    },

},
{
    timestamps:true,
}
);
const Product=mongoose.model('Product',productSchema);
export default Product;
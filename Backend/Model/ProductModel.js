import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    description:{
        type:String,
        required : true
    },
    price:{
        type:Number,
        required : true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
})


 const Product = mongoose.model('Product',ProductSchema)
 export default Product

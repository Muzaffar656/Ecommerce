import { catchAsyncError } from '../MiddelWare/CatchAsyncError.js'
import Product from '../Model/ProductModel.js'
import cloudinary  from 'cloudinary'
export const CreateProduct =async (req,res,next)=>{
    
    const file = req.files.image
const {name,description,price,category} = req.body;

 const mycloud =   await cloudinary.uploader.upload(file.tempFilePath)
const product = await Product.create({
    name,
    description,
    price,
    category,
    image:{
        public_id:mycloud.public_id,
        url:mycloud.url
    }

})

res.json({
    message:"User Created Success",
    product,
    success:true
})

}

export const GetallProduct = catchAsyncError(async (req,res,next)=>{
    const product = await Product.find()
    res.json({
        success:true,
        product
    })
})

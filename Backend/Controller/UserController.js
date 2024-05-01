import ErrorHandler from "../Utils/errorHandler.js";
import { catchAsyncError } from "../MiddelWare/CatchAsyncError.js";
import { User } from "../Model/User.js";
export const register = catchAsyncError(async(req,res,next)=>{
    const {name,email,password} = req.body

    let user = await User.findOne({email})
    if(user) return next(new ErrorHandler("User are already Exists",200))
    
    user = await User.create({
        name,
        email,
        password
    })
    
    res.status(200).json({
        success:true,
        message:"Register SuccessFully",
        user,
        
    })
})

export const login = catchAsyncError(async(req,res,next)=>{
    const {email,password} = req.body

    let user = await User.findOne({email})
    if(!user) return next(new ErrorHandler("User are not Exists",200))
    res.status(200).json({
        success:true,
        message:"login SuccessFully",
        user,
        
    })
})
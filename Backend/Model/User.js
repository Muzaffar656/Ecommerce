import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    name:{
        type : String,
        required: [true,'name is required']
    },
    email:{
        type : String,
        required: [true,'email is required']
    },
    password:{
        type : String,
        required: [true,'name is required'],
    }
})

export const User  = mongoose.model("User",UserSchema)
export const catchAsyncError = (passedFunction) => (req,res,next)=>{
    Promise.resolve(passedFunction(req,res,next)).catch(next)
}



// const asyncError = (func) => {

//   return (req,res,next)=>{
//         func(req,res,next).catch(next())
//     }

// }
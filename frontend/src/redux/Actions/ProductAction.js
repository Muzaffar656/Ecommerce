import { ActionTypes } from "../Constant/actions-type"

export const AddToCart = (product)=>{
   return{
    type:ActionTypes.ADD_TO_CART,
    payload:product
   }
}
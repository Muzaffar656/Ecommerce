import { ActionTypes } from "../Constant/actions-type"

export const AddToCart = (product,qty=1)=>{

   return{
    type:ActionTypes.ADD_TO_CART,
    payload:{
         id:product.id,
         name:product.name,
         description:product.description,
         price:product.price,
         img:product.img,
         qty
          }
   }
}
 
export const DecreaseQty = (product,qty=1)=>{
   return {
      type:ActionTypes.DECREMENT,
      payload:{
         id:product.id,
         name:product.name,
         description:product.description,
         price:product.price,
         img:product.img,
         qty
      }
   }
}


export const RemovePro = (product)=>{

   return{
      type:ActionTypes.REMOVE_PRODUCT,
      payload:{
         id:product.id,
         name:product.name,
         description:product.description,
         price:product.price,
         img:product.img,
      }
   }
}
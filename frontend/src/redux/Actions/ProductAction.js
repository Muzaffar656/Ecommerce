import { ActionTypes } from "../Constant/actions-type"



export const SetProducts = (product)=>{
   
   return{
      type:ActionTypes.SET_PRODUCTS,
      payload: product.map((el)=>{
            return{
               id:el._id,
               name:el.name,
               description:el.description,
               price:el.price,
               category:el.category
            }

        })
      
   }
}

export const AddToCart = (product,qty=1)=>{
console.log(product)
   return{
    type:ActionTypes.ADD_TO_CART,
    payload:{
         id:product._id,
         name:product.name,
         description:product.description, 
         price:product.price,
         img:product.image.url,
         qty
          }
   }
}
 
export const DecreaseQty = (product,qty=1)=>{
   return {
      type:ActionTypes.DECREMENT,
      payload:{
         id:product._id,
         name:product.name,
         description:product.description,
         price:product.price,
         img:product.image.url,
         qty
      }
   }
}


export const RemovePro = (product)=>{

   return{
      type:ActionTypes.REMOVE_PRODUCT,
      payload:{
         id:product._id,
         name:product.name,
         description:product.description,
         price:product.price,
         img:product.image.url,
      }
   }
}
import { ActionTypes } from "../Constant/actions-type"
import axios from "axios"


export const SetProducts = (product)=>{
   
   return{
      type:ActionTypes.SET_PRODUCTS,
      payload:{
         id:product._id,
         name:product.name,
         description:product.description,
         price:product.price,
         category:product.category,
         img:product.image.url,
      }
      
   }
}

export const getAllproduct = ()=>async(dispatch) => {
const url = "http://localhost:8000/api/v1/getallproduct";
// const config = { header: { "Content-Type": "application/json" } }

const {data} = await axios.get(url)

dispatch({
   type:ActionTypes.GET_ALL_PRODUCT,
   payload:data.product.map((el)=>{
      return{
         id:el.id,
         name:el.name,
         description:el.description, 
         price:el.price,
         img:el.img,
      }
   })
})
}

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
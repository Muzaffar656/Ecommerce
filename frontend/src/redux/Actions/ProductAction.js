import { ActionTypes } from "../Constant/actions-type"
import axios from "axios"


// export const SetProducts = (product)=>{
   
//    return{
//       type:ActionTypes.SET_PRODUCTS,
//       payload:{
//          id:product._id,
//          name:product.name,
//          description:product.description,
//          price:product.price,
//          category:product.category,
//          img:product.image.url,
//       }
      
//    }
// }

export const getAllproduct = ()=>async(dispatch) => {
const url = "http://localhost:8000/api/v1/getallproduct";
// const config = { header: { "Content-Type": "application/json" } }

const {data} = await axios.get(url)

dispatch({
   type:ActionTypes.GET_ALL_PRODUCT,
   payload:data.product
})
}

export const AddToCart = (product,qty)=> async (dispatch,getState) =>{
const url = `http://localhost:8000/api/v1/product/${product}`;

   const {data} = await axios.get(url)

   dispatch({
    type:ActionTypes.ADD_TO_CART,
    payload:{
         product:data.product._id,
         name:data.product.name,
         description:data.product.description, 
         price:data.product.price,
         img:data.product.image.url,
         qty
          }
   })

}
 
// export const DecreaseQty = (product,qty=1)=>{

//    return {
//       type:ActionTypes.DECREMENT,
//       payload:{
//          id:product.id,
//          name:product.name,
//          description:product.description,
//          price:product.price,
//          img:product.img,
//          qty
//       }
//    }
// }

export const IncreaseQty = (product,qty=1)=>{
   return {
      type:ActionTypes.INCREASE_QTY,
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

export const RemovePro = (product)=>async dispatch =>{
console.log(product)
   dispatch({
      type:ActionTypes.REMOVE_PRODUCT,
      payload:{
        product
      }
   })
}
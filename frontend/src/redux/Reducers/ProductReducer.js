import { ActionTypes } from "../Constant/actions-type";



export const productReducer = (state = { cart: [],allproduct:[] ,getAll:[]},{type,payload})=>{
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            const item = payload
  
       
            const isItemExits = state.cart.findIndex((el)=>el.id === item.id)
           
        if(isItemExits >= 0){
   state.cart[isItemExits].qty += 1
            return{
                ...state,
                cart:[...state.cart]
            }
        }else{
                const newel = {...item}
            return{
                ...state,
                cart:[...state.cart,newel],
                
            }
        }
     case ActionTypes.INCREASE_QTY:

     const itemexist = state.cart.findIndex((el)=>el.id === payload.id)

         
     if(itemexist >= 0){
        state.cart[itemexist].qty += 1
                 return{
                     ...state,
                     cart:[...state.cart]
                 }
             }else{
                     const newel = {...item}
                 return{
                     ...state,
                     cart:[...state.cart,newel],
                     
                 }
             }












      case ActionTypes.DECREMENT:
        const items = payload
        
        const ItemExits = state.cart.findIndex((el)=>el.id===items.id)
  
        if(state.cart[ItemExits].qty > 1){
         state.cart[ItemExits].qty -=1

         return{
             ...state,
             cart:[...state.cart]
            }
        } else if(state.cart[ItemExits].qty === 1){
                const data = state.cart.filter((el)=>el.id !== items.id)

                return{
                    ...state,
                    cart:data
                }
            }
            break
   
   
     case ActionTypes.REMOVE_PRODUCT:
        const itemsqty = payload
     
        const removeitem = state.cart.filter((el)=>el.id !== itemsqty.id)
        return {
            ...state,
            cart:removeitem
        }
    
    
        // case ActionTypes.SET_PRODUCTS:
        //     const itemss = payload
       
        //         const newel = {...itemss}
        //     return{
        //         ...state,
        //         allproduct:[...state.allproduct,newel],
                
        //     }
        

        case ActionTypes.GET_ALL_PRODUCT:
           
            return{
                ...state,
                getAll:payload
            }
        default:
            return state;
    }
}


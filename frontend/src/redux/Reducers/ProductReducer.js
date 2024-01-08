import { ActionTypes } from "../Constant/actions-type";

const initialState = {
    products:[],
    cartitem:[]
}

export const productReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            const item = payload
            const isItemExits = state.cartitem.find((el)=>el.products === item.products)
        if(isItemExits){
            return{
                ...state,
                cartitem:state.cartitem.map((el)=>{
                    el.products === item.products ? item : el
                })
            }
        }else{
            return{
                ...state,
                cartitem:[...state.cartitem,item]
            }
        }
          
    
        default:
            return state;
    }
}

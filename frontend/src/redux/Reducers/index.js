import {combineReducers} from 'redux'
import { productReducer } from './ProductReducer'


const reducer = combineReducers({
    products:productReducer
})

export default reducer

import {createStore} from 'redux'
import reducer from './redux/Reducers'
const store = createStore(
 reducer
)

export default store
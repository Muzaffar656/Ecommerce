import {createStore,applyMiddleware} from 'redux'
import reducer from './redux/Reducers'
import {thunk} from 'redux-thunk'
const store = createStore(
 reducer,
 applyMiddleware(thunk),
)

export default store
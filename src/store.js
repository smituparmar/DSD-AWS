import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { searchReducer } from './reducers/searchReducers'


const reducer = combineReducers({
    searchData :searchReducer
})



    


const initialState = {

}

const middleWare = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store;
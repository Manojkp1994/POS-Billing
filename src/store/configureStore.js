import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from '../reducers/usersReducers'
import billingReducer from '../reducers/billingReducers'



const configureStore = () => {
    const store = createStore (combineReducers({
        users : usersReducer,
        bill : billingReducer
    }),composeWithDevTools(applyMiddleware(thunk)))
    return store 
}

export default configureStore
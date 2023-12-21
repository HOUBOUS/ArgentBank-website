import {createStore, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

//Configuration of Reducers 
import { combineReducers } from "redux";
import  userReducer  from '../Redux/reducers/user.reducer.js';
import authReducer from "../Redux/reducers/auth.reducer.js";

const rootReducer = combineReducers({
    userReducer, 
    authReducer,
    
    });


const persistConfig ={
    key: 'root',
    storage,

}


const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = {thunk};

const store = createStore(
    persistedReducer, 
    composeWithDevTools(applyMiddleware(...middleware)),
    
    );
export const persiststor = persistStore(store);
export default store;
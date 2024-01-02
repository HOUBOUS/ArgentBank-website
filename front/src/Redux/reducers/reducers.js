import { combineReducers } from "redux";
import accountReducer from '../Slices/userSlice'
import signinReducer  from '../Slices/signinSlice'

export default combineReducers({
    account: accountReducer,
    signin: signinReducer,

})
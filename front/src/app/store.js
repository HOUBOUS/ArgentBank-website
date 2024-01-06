import {configureStore} from '@reduxjs/toolkit';
import signinReducer from '../Redux/Slices/signinSlice.js';
import userProfileReducer from '../Redux/Slices/userSlice.js';

// Create Store

export const store = configureStore ({
 reducer: {
   
    signin: signinReducer,
    userProfile: userProfileReducer, 
 },
 devTools: true,

});

export default store;
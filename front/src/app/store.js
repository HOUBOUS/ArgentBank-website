import {configureStore} from '@reduxjs/toolkit';

import rootReducer from '../Redux/reducers/reducers';
import signinReducer from '../Redux/Slices/signinSlice.js';
import userProfileReducer from '../Redux/Slices/userSlice.js';

// Create Store

const store = configureStore ({
 reducer: {
    root: rootReducer,
    signin: signinReducer,
    userProfile: userProfileReducer, 

 },
 devTools: true,

});

export default store;
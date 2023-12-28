import {configureStore} from '@reduxjs/toolkit';

import rootReducer from '../Redux/reducers/reducers';
import signinReducer from '../pages/SignIn/signinSlice.js';
import accountReducer from '../pages/Account/accountSlice';

// Create Store

const store = configureStore ({
 reducer: {
    root: rootReducer,
    signin: signinReducer,
    account: accountReducer, 

 },
 devTools: true,

});

export default store;
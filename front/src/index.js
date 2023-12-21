import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App.js";

//Redux
// Import the Provider
import { Provider } from "react-redux";

// Import the store 
import {configureStore} from '@reduxjs/toolkit';


// import { store } from "./app/store.js";

import rootReducer from './Redux/reducers/reducers.js'

// Create Store

const store = configureStore ({
 reducer: rootReducer,
 devTools: true,

});

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>

  <React.StrictMode>
    <BrowserRouter>
      
        <App />
      
    </BrowserRouter>
  </React.StrictMode>

 </Provider>
);

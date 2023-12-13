import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App.js";

//Redux
import { Provider } from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
    
   reducer: rootReducer,
   devTools: true,
 

});


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

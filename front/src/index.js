import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App.js";

//Redux
// Import the Provider
import { Provider } from "react-redux";
import  {store} from "./app/store.js";




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

import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
   <Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/account"  element={<Account/>} />
        <Route path="*" element={<Error/>} />

    </Routes>    
   </Router>
  </React.StrictMode>,
  document.getElementById('root')

)

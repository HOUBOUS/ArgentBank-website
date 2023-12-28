import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import Account from "../pages/Account/Account";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../pages/Error/Error";
import './App.css';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    
  );
}
export default App;

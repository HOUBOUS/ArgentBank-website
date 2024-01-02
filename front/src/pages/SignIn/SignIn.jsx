import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import {signinUser}  from "../../Redux/Slices/signinSlice.js";

function SignIn() {

  //States
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Redux state
  const {isAuth, isLoading, error, isRemember } = useSelector((state)=>state.signin);

  const dispatch = useDispatch();

  const navigate = useNavigate();
 
   
  // function manage changement of value different element of formular

  // function manage submit of formular
  const handleSubmit = async (e) => {
    e.preventDefault();
    let credentials={
       email,
       password
    }

    dispatch(signinUser(credentials))

  }

  useEffect (() =>{
    if (isAuth){
      navigate('/account')
    }

  }, [isAuth, navigate])


  
   
 return (
    <div>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          
        
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">UserName</label>
              <input
                type="email"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                 onChange={ (e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" 
              id="remember-me" 
              value="remember-me"
              defaultChecked={isRemember}
              onChange={() => dispatch(signinUser(!isRemember))}
             
              />
              <label htmlFor="remember-me"> Remember me </label>
            </div>

            <button className="sign-in-button" type="submit">
              Sign In
            </button>

            {isLoading ? 'Loading...':'Login'}
            {error && (
              <div className="alert alert-danger" role='alert'>{error}</div>
            )}
            
              
          
           
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;

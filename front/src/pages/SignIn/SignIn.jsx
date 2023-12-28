import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { signinUser } from "./signinSlice.js";

function SignIn() {

  //States
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Redux state
  const {isLoading, error} = useSelector((state)=>state.signin);

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

    dispatch(signinUser(credentials)).then ((result)=>{
      if (result.payload){
          setEmail('');
          setPassword('');
          navigate('/');
      }
    });
    
    //         if (isRemember) {
    //     localStorage.setItem("token, token");
    //     //upDate state and note sucess authentification
    //     dispatch(signinSucess());
    //     navigate("/Account/Account");
    //   } else {
    //     // If Token is not returned
    //     localStorage.removeItem("token");
    //   }
    // }
  };
 
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
              <input type="checkbox" id="remember-me" 
             
              />
              <label htmlFor="remember-me"> Remember me </label>
            </div>

            <NavLink to="/Account" className="sign-in-button">
              Sign In
            </NavLink>

            {isLoading?'Loading...':'Login'}
            {error&&(
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

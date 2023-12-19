import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function SignIn() {
  // const token = useSelector((state) => state.auth.token);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");


  
  // function manage changement of value different element of formular
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // function manage submit of formular
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: username,
      password: password,
    };
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
              <label htmlFor="username">Username</label>
              <input
                type="email"
                id="username"
                value={username}
                onChange={handleUserNameChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me"> Remember me </label>
            </div>

            <NavLink to="/Account" className="sign-in-button">
              Sign In
            </NavLink>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;

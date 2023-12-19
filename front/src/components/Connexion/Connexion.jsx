import React from "react";
import { NavLink } from "react-router-dom";
import './Connexion.css';

function Connexion() {
  return (
    <div>
      <div className="user-connect">
        <NavLink className="user-button" to="/signin">
           <i className=" fas fa-user-circle"></i>
          <p>Sign In</p>
        </NavLink>
        <NavLink className="user-button" to="/signup">
          <p>Sign Up</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Connexion;

import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.png";
import "./Navbar.css";
import UserConnexion from "../UserConnexion/UserConnexion";

function Navbar() {
  return (
    <div>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Logo de la banque en ligne Argent Bank"
          />
          <h2 className="sr-only">Argent Bank</h2>
        </NavLink>
        <UserConnexion />
      </nav>
    </div>
  );
}

export default Navbar;

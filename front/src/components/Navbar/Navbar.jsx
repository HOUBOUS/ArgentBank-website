import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.png";
import './Navbar.css';
import Connexion from '../Connexion/Connexion.jsx';

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
        </NavLink>

        <Connexion/>

      </nav>
    </div>
  );
}

export default Navbar;

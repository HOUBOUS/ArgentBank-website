import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.png";

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
      </nav>
    </div>
  );
}

export default Navbar;

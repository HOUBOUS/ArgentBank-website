import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import{signup} from "../../Redux/actions/action";
import './UserConnexion.css';

function UserConnexion() {

  const { token } = useSelector((state) => state.ignin);
  const {firstName} = useSelector((state) => state.userAccount)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUpHandler =() =>{
    dispatch( signup())
    navigate ('/')
  }
  
  return (
    <div>
      {!token ? (
        <NavLink className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      ) : (
        ""
      )}

      {token ? (
        <NavLink className="main-nav-item" to="/account">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </NavLink>
      ) : (
        ""
      )}
      {token ? (
        <NavLink className="main-nav-item" onClick={signUpHandler}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserConnexion;

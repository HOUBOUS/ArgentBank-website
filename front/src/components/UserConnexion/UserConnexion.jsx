import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./UserConnexion.css";
import { signinUser } from "../../Redux/Slices/signinSlice.js";
import { getUserProfile } from "../../Redux/Slices/userSlice.js";

function UserConnexion() {
  const isAuth = useSelector((state) => state.signin.isAuth);
  const user  = useSelector((state) => state.userProfile.user);
  const dispatch = useDispatch();

//   const localStorageUser = localStorage.getItem("user");
  useEffect(() => {
    if (isAuth) {
      dispatch(getUserProfile());
      console.log(user)
    }
  }, [isAuth, dispatch]);

 
  function clearLocalStorage() {
    localStorage.clear();
    // dispatch( signinUser());
    // dispatch( getUserProfile());
  }


  return (
    <div>
      {isAuth ? (
        <NavLink className="main-nav-item" to="/account">
          <i className="fa fa-user-circle"></i>
          {user}
        </NavLink>
      ) : (
        <NavLink className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      )}

      {isAuth && (
        <NavLink className="main-nav-item" 
        onClick={()=> clearLocalStorage()} to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
        
      )}
    </div>
  );
}

export default UserConnexion;

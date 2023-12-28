import axios from "axios";
import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNUP,
} from "../reducers/auth.reducer";
import {
  USER_ACCOUNT_SUCESS,
  USER_ACCOUNT_FAIL,
  USER_ACCOUNT_UPDATE,
  USER_ACCOUNT_RESET,
} from "../reducers/user.reducer";

//SIGNIN ACTIONS

export const signin = (email, password) => async (dispatch) => {
  try {
    // Authentication request with Axios

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email, password },
      config
    );
    console.log(data);
    // Dispatch appropriate actions according to the response
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    dispatch(userAccount(data.body.token))

  } catch (error) {
    //manage authentification errors
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//SIGNUP ACTIONS

export const signup = () => async (dispatch) => {
  dispatch({ type: USER_SIGNUP });
  dispatch({ type: USER_ACCOUNT_RESET });
};



//USER ACCOUNT ACTIONS

export const userAccount = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      { token },
      config
    );

    dispatch({
      type: USER_ACCOUNT_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// UPDATE USER ACCOUNT ACTIONS

export const userAccountUpdate =
  (token, newFirstName, newLastName) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        { firstName: newFirstName, lastName: newLastName },
        config
      );

      dispatch({
        type: USER_ACCOUNT_UPDATE,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_ACCOUNT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
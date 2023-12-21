import axios from "axios";
import { USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } from "../reducers/auth.reducer";





//SIGNIN ACTIONS 

export const signin = (email, password) =>
async (dispatch) => {
  try{
    // Authentication request with Axios 

    const config = {
      headers:{
        'content-type' : 'application/json',
      },
    }
    const {data} = await axios.post(
       'http://localhost:3001/api/v1/user/login',
       { email, password },
       config

    )
    // Dispatch appropriate actions according to the response
    dispatch({type: USER_SIGNIN_SUCCESS, payload: data})
    
  } catch (error){
    //manage authentification errors
    dispatch({
      type: USER_SIGNIN_FAIL, 
      payload: 
      error.response && error.response.data.message
      ?error.response.data.message
      :error.message,

    });

  };
};
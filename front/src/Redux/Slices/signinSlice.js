import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuth: false,
  isLoading: false,
  isRemember: false,
  token: '',
  error: '',
};
//asynchrone function with Axios
export const signinUser = createAsyncThunk(
  "signin/signinUser",
  async (credentials) => {
    const request = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      credentials
    );
    const token = await request.data.body.token;
    console.log(token);
    localStorage.setItem("signin", JSON.stringify(token));

    return token;
  }
);

const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {},
  extraReducers:(builder) => {
      builder
      //signIn Loading
     .addCase (signinUser.pending,(state) => {
          state.isLoading = true;
          state.token = null;
          state.error = null;
      })
      //signIn Sucess
     builder.addCase (signinUser.fulfilled,(state, action) => {
          state.isLoading = false;
          state.isAuth = true;
          state.token = action.payload;
          state.error = null;
console.log(action);
      })
      
      //signIn Fail or signUp
      builder.addCase (signinUser.rejected,(state, action) => {
          state.isLoading = false;
          state.isAuth = false;
          state.token = null;
          console.log(action.error.message);
          if(action.error.message ==='Request failed with status code 401')
          {state.error='Acess Denied! Invalid Credentials';}
          else{
              state.error = action.error.message;
          }
      })

      },
});

const {actions, reducer } = signinSlice;
export const {

  signinUserPending,
  signinUserFulfilled,
  signinUserRejected,
 
  
} = actions


export default reducer;

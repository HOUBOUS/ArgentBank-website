import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  user: null,
  error: '',
};

//asynchrone function with Axios
export const getUserProfile = createAsyncThunk(
  "userProfile/getUserProfile",
  async (credentials) => {
    const request = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      credentials
    );
    const response = await request.data.data;
    localStorage.setItem("userProfile", JSON.stringify(response));

    return response;
  }
);

export const updateUserProfile = createAsyncThunk(
  'userProfile/updateUserProfile',
  async (credentials) => {
    const request = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      credentials
    );
    const response = request.data.data;
    localStorage.setItem("userProfile", JSON.stringify(response));

    return response;
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //userProfile Loading
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
       
      });
    //userProfile Sucess
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = '';
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.user = false;
      console.log(action.error.message);
      if (action.error.message === "Request failed with status code 401") {
        state.error = "Acess Denied! Invalid Credentials";
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(updateUserProfile.pending, (state) =>{
      state.isLoading = true;
   
    })
    builder.addCase(updateUserProfile.fulfilled, (state, action) =>{
      state.isLoading = false;
      state.user = action.payload;
      state.error = '';
    })
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.user = false;
      console.log(action.error.message);
      if (action.error.message === "Request failed with status code 401") {
        state.error = "Acess Denied! Invalid Credentials";
      } else {
        state.error = action.error.message;
      }
    });
   
  },

});
const { actions, reducer } =  userProfileSlice;
export const {

  userProfilePending,
  userProfileFulfilled,
  userProfileRejected,
  updateUserProfilePending,
  updateUserProfileFulfilled,
  updateUserProfileRejected,
  getUserProfilePending,
  getUserProfileFulfilled,
  getUserProfileRejected,

} = actions;

export default reducer;

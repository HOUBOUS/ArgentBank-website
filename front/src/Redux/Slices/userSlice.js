import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  user: null,
  error: "",
};

//asynchrone function with Axios
export const getUserProfile = createAsyncThunk(
  "userProfile/getUserProfile",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().signin.token; // Récupération du token d'authentification depuis le state Redux
    console.log(token);
    const request = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {}, // Envoyez les données nécessaires pour la requête ici, s'il y en a
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await request.data.body;
    localStorage.setItem("userProfile", JSON.stringify(response));
    return response;
  }
);

export const updateUserProfile = createAsyncThunk(
  "userProfile/updateUserProfile",
  async (updatedUserData, thunkAPI) => {
    const token = thunkAPI.getState().signin.token; // Récupération du token d'authentification depuis le state Redux
    const request = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      updatedUserData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const response = request.data.body;
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
      state.error = "";
      console.log(action.payload)
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
    // builder.addCase(updateUserProfile.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(updateUserProfile.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload;
    //   state.error = "";
    // });
    // builder.addCase(updateUserProfile.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.user = false;
    //   console.log(action.error.message);
    //   if (action.error.message === "Request failed with status code 401") {
    //     state.error = "Acess Denied! Invalid Credentials";
    //   } else {
    //     state.error = action.error.message;
    //   }
    // });
  },
});

const { actions, reducer } = userProfileSlice;
export const {
 
  // updateUserProfilePending,
  // updateUserProfileFulfilled,
  // updateUserProfileRejected,
  getUserProfilePending,
  getUserProfileFulfilled,
  getUserProfileRejected,
} = actions;

export default reducer;



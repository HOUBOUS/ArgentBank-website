import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    isAuth: false,
    isLoading: false,
    isRemember: false,
    error: null
}
//asynchrone function with Axios
export const signinUser = createAsyncThunk(
    'signin/signinUser',
    async (credentials) =>{
        const request = await axios.post('http://localhost:3001/api/v1/user/login', credentials);
        const response = await request.data.data;
        localStorage.setItem(
            'signin', JSON.stringify(response));
       
       return response;
    }

  );


const signinSlice = createSlice({
    name: 'signin',
    initialState,
    extraReducers:(builder) => {
        builder
        //signIn Loading
       .addCase (signinUser.pending,(state) => {
            state.isLoading = true;
            state.error = null;
        })
        //signIn Sucess
        .addCase (signinUser.fulfilled,(state, action) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = null;
        })
        //SignIn Remember
        // .addCase(signinUser.fulfilled, (state, action) =>{
        //     state.isRemember = action.payload;
        // })
        //signIn Fail or signUp
        .addCase (signinUser.rejected,(state, action) => {
            state.isLoading = false;
            state.isAuth = false;
            console.log(action.error.message);
            if(action.error.message ==='Request failed with status code 401')
            {state.error='Acess Denied! Invalid Credentials';}
            else{
                state.error = action.error.message;
            }
        })     
        },


});

export default signinSlice.reducer;

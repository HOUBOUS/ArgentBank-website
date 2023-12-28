import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    isLoading: false,
    userName: '',
    firstName: '',
    lastName: '',
    error: '',

}

//asynchrone function with Axios
export const accountUser = createAsyncThunk(
    'account/accountUser',
    async (credentials) =>{
        const request = await axios.post('http://localhost:3001/api/v1/user/profile', credentials);
        const response = await request.data.data;
        localStorage.setItem(
            'account', JSON.stringify(response));
       
       return response;
    });

    const accountSlice = createSlice({
        name: 'account',
        initialState,
        extraReducers:(builder) => {
            builder
            //account Loading
           .addCase (accountUser.pending,(state) => {
                state.isLoading = true;
                state.error = null;
            })
            //signIn Sucess
            .addCase (accountUser.fulfilled,(state, action) => {
                state.isLoading = false;
                state.userName = action.payload;
                state.firstName = action.payload;
                state.lastName = action.payload;
                state.error = '';
            })
           .addCase (accountUser.rejected,(state, action) => {
                state.isLoading = false;
                state.userName = '';
                state.firstName = '';
                state.lastName = '';
                console.log(action.error.message);
                if(action.error.message ==='Request failed with status code 401')
                {state.error='Acess Denied! Invalid Credentials';}
                else{
                    state.error = action.error.message;
                }
            })    
            //Account AccountSignUp
            .addCase(accountUser, (state) => {
                state.isLoading = false;
                state.userName = '';
                state.firstName = '';
                state.lastName = '';
                state.error = '';
            }) 
            },
    
    
    });

    
    
    export default accountSlice.reducer;
    
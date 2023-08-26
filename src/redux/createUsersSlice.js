import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
    status: "idle",
    users: [],
    loading: false,
    error: null

}


export const createUsersApi = createAsyncThunk(
  'createUsers/createUsers',
  async ({ name }) => {
    const payload = {
      name,
      // password,
      // password_confirmation
    };

    const headers = {
      'Content-Type': 'application/json',
    };
      const response = await axios.post(
        'http://127.0.0.1:3001/api/v1/users',
        payload,
        { headers, withCredentials: true }
      );

      console.log(response.data);
      console.log(response.accessToken);
      return response.data;
  }
);



    const createUserSlice = createSlice({
        name: "reservationCreateItem",
        initialState,
        reducers: {
            UsersPending(state){
                state.loading = true;
                state.error = null;
            
            },
            UsersSuccess(state, action){
                state.loading = false;
                state.error = null;
                state.users = action.payload.data;
              
            },
            UsersError(state, action){
                state.loading = false;
                state.error = action.payload;
        
    
    
            }
        }
    })
    
    export const { reducers } = createUserSlice.actions;
    
    export default createUserSlice.reducer;
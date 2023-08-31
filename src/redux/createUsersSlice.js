import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
    status: "idle",
    users: [],
    loading: false,
    error: null,
    
}

// creates user
export const createUsersApi = createAsyncThunk(
  'createUsers/createUsers',
  async ({ user}) => {
    const payload = {
      name: user,

    };
    const response = await axios.post(
      'http://127.0.0.1:3001/api/v1/users',
      payload,
    );

   
    return response.data;
  }
);


    const createUserSlice = createSlice({
        name: "userCreate",
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
            },
          

        },
        extraReducers: (builder) => {
          builder.addCase(createUsersApi.fulfilled, (state, action) => {
            state.userId = action.payload.userId; 
          });
        },
    })
    
    export const { UsersPending, UsersSuccess, UsersError } = createUserSlice.actions;

    
    export default createUserSlice.reducer;
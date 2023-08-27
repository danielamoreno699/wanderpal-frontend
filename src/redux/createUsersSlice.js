import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
    status: "idle",
    users: [],
    loading: false,
    error: null,
    
}


export const createUsersApi = createAsyncThunk(
  'createUsers/createUsers',
  async ({ name, password }) => {
    const payload = {
      name,
      password,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await axios.post(
      'http://127.0.0.1:3001/api/v1/users',
      payload,
      {
        headers,
        withCredentials: true,
      }
    );

    console.log(response.data);
    console.log(response.accessToken);
    return response.data;
  }
);



export const userAuthApi = createAsyncThunk(
  'createUsers/userAuth',
  async ({ user, password, password_confirmation }) => {
    const payload = {
      user,
      password,
      password_confirmation,
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:3001/api/v1/users/session',
        payload,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      const accessToken = response.data.accessToken;
      const roles = response.data.roles;
      console.log(response.data);
      return {
        responseData: response.data,
        accessToken,
        roles,
      };
    } catch (error) {
      throw handleAuthError(error);
    }
  }
);

const handleAuthError = (error) => {
  if (error.response?.status === 400) {
    return new Error('Missing username or password');
  } else if (error.response?.status === 401) {
    return new Error('Invalid username or password');
  } else {
    return error;
  }
};


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
            },

        }
    })
    
    export const { UsersPending, UsersSuccess, UsersError } = createUserSlice.actions;

    
    export default createUserSlice.reducer;
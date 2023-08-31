import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  status: 'idle',
  users: [],
  loading: false,
  error: null,
  isAuthenticated : false,
  logout: true,
  
};

// fetching users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://wanderpalbackend.onrender.com/api/v1/users');
    return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export const { login, logout } = usersSlice.actions;

export default usersSlice.reducer;

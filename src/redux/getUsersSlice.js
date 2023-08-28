import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  status: 'idle',
  users: [],
  loading: false,
  error: null,
};

// fetching users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('http://127.0.0.1:3001/api/v1/users');
    return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});




export default usersSlice.reducer;

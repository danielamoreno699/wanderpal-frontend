
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
    status: "idle",
    users: [],
    loading: false,
    error: null,
    isLoggedIn: false,
    user: null,
    accessToken: null,
    roles: [],
}


 
export const fetchUsers = createAsyncThunk('items/fetchItems', 
     async () => {
    const response = await fetch('http://127.0.0.1:3001/api/v1/users');
    if (response.ok){
    const data = await response.json();
         return data;
    }
    throw new Error('Request failed!');
});


    const getUserSlice = createSlice({
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
            userLoggedIn(state, action) {
              state.isLoggedIn = true;
              state.user = action.payload.user;
              state.accessToken = action.payload.accessToken;
              state.roles = action.payload.roles;
            },
            userLoggedOut(state) {
              state.isLoggedIn = false;
              state.user = null;
              state.accessToken = null;
              state.roles = [];
            }
        }
    })
    
    export const { UsersPending, UsersSuccess, UsersError, userLoggedIn, userLoggedOut } = getUserSlice.actions;

    
    export default getUserSlice.reducer;
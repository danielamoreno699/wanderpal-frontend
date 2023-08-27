
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useAxiosPrivate from "../hooks/useAxiosPrivate";



export const initialState = {
    status: "idle",
    users: [],
    loading: false,
    error: null,
    roles: [],
    isAuthenticated: false,
    loggingIn: false,  
    loggingOut: false,
}


 
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await useAxiosPrivate.get('http://127.0.0.1:3001/api/v1/users');
        
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Request failed with status: ' + response.status);
        }
    } catch (error) {
        throw new Error('Request failed: ' + error.message);
    }
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
            LoggingIn(state) {
                state.loggingIn = true;
                state.isAuthenticated = true;
            },
            LoggingOut(state) {
                state.loggingOut = true;
                state.isAuthenticated = false;
            }
        }
    })
    

    export const { UsersPending, UsersSuccess, UsersError, loggingIn, loggingOut } = getUserSlice.actions;

    
    export default getUserSlice.reducer;
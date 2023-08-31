import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const initialState = {
    status: "idle",
    reservedItems:{},
    loading: false,
    error: null,
  
}

export const createReservationApi = createAsyncThunk(
    
    "reservationCreateItem/createReservationItem",
    
    async ( {itemId, userId, date, city}) => {
        const payload = {
            user_id: userId, 
            date,
            city
        };
        const response = await axios.post(`https://wanderpalbackend.onrender.com/api/v1/items/${itemId}/reservations`, payload);
        return response.data;
    }
    )


 const createReservationItemSlice = createSlice({
    name: "reservationCreateItem",
    initialState,
    reducers: {
        ReservationItemsPending(state){
            state.loading = true;
            state.error = null;
        
        },
        ReservationItemsSuccess(state, action){
            state.loading = false;
            state.error = null;
            state.reservedItems = action.payload.data;
          
        },
        ReservationItemsError(state, action){
            state.loading = false;
            state.error = action.payload;
    


        }
    }
})

export const { reducers } = createReservationItemSlice.actions;

export default createReservationItemSlice.reducer;

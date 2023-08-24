import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const initialState = {
    status: "idle",
    reservedItems:{},
    loading: false,
    error: null,
    reservationSuccess: false,
}

export const createReservationApi = createAsyncThunk(
    
    "reservationCreateItem/createReservationItem",
    
    async ( {itemId, userId, date, city}) => {
        const payload = {
            user_id: userId, 
            date,
            city
        };
        console.log(payload)
        const response = await axios.post(`http://127.0.0.1:3001/api/v1/items/${itemId}/reservations`, payload);
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
            state.reservationSuccess = false;
        },
        ReservationItemsSuccess(state, action){
            state.loading = false;
            state.error = null;
            state.reservedItems = action.payload.data;
            state.reservationSuccess = true;
        },
        ReservationItemsError(state, action){
            state.loading = false;
            state.error = action.payload;
            state.reservationSuccess = false;


        }
    }
})

export const {reducers} = createReservationItemSlice.actions;

export default createReservationItemSlice.reducer;

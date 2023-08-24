import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

const initialState = {
    status: "idle",
    deletedItems:{},
    loading: false
}

export const deleteReservationApi = createAsyncThunk(

    "reservationDeleteItem/deleteReservationItem",

    async ( {itemId, reservationId}) => {
        const response = await axios.delete(` http://127.0.0.1:3001/api/v1/items/${itemId}/reservations/${reservationId}`);
        return response.data;
    })

    const deleteReservationItemSlice = createSlice({
        name: "reservationDeleteItem",
        initialState,
        reducers: {
            ReservationItemsPending(state){
                state.loading = true;
            },
            ReservationItemsSuccess(state, action){
                state.loading = false;
                state.deletedItems = action.payload.data;
            },
            ReservationItemsError(state){
                state.loading = false;
            }
        }
    })

export const { reducers } = deleteReservationItemSlice.actions;
export default deleteReservationItemSlice.reducer;
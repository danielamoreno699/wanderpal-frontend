import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

const initialState = {
    status: "idle",
    deletedItems:[],
    loading: false
}

export const deleteReservationApi = createAsyncThunk(

    "reservationDeleteItem/deleteReservationItem",


    async ( {reservationId, itemId}) => {
        console.log("Deleting reservation with reservationId:", reservationId);
        console.log("Deleting item with itemId:", itemId);
        const response = await axios.delete(` http://127.0.0.1:3001/api/v1/items/${itemId}/reservations/${reservationId}`);
        return response.data;
    })

    const deleteReservationItemSlice = createSlice({
        name: "reservationDeleteItem",
        initialState,
        reducers: {
            resetDeletedItems: (state) => {
              state.deletedItems = [];
            }
          },
        
        extraReducers: (builder) => {
            builder
              .addCase(deleteReservationApi.pending, (state) => {
                state.loading = true;
              })
              .addCase(deleteReservationApi.fulfilled, (state, action) => {
                state.loading = false;
                const deletedItemId = action.payload.itemId;

                 state.deletedItems = state.deletedItems.filter(itemId => itemId !== deletedItemId);
               
              })
              .addCase(deleteReservationApi.rejected, (state) => {
                state.loading = false;
              });
          },
    })

export const { resetDeletedItems } = deleteReservationItemSlice.actions;
export default deleteReservationItemSlice.reducer;
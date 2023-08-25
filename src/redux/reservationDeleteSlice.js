import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

const initialState = {
    status: "idle",
    items:[],
    loading: false
}

export const deleteReservationApi = createAsyncThunk(
    "reservationDeleteItem/deleteReservationItem",
    async ( {reservationId, itemId} ) => {
      console.log("Deleting reservation with reservationId:", reservationId);
      console.log("Deleting item with itemId:", itemId);
      
      try {
        const response = await axios.delete(`http://127.0.0.1:3001/api/v1/items/${itemId}/reservations/${reservationId}`);
        console.log("Delete response status:", response.status);
        console.log("Delete response headers:", response.headers);
        console.log("Delete response data:", response.data);
        return response.data;
      } catch (error) {
        console.error("Delete error:", error);
        throw error;
      }
    }
  );
  

    const deleteReservationItemSlice = createSlice({
        name: "reservationDeleteItem",
        initialState,
        reducers: {
            resetDeletedItems: (state) => {
              state.items = [];
            }
          },
        
        extraReducers: (builder) => {
            builder
              .addCase(deleteReservationApi.pending, (state) => {
                state.loading = true;
              })
              .addCase(deleteReservationApi.fulfilled, (state, action) => {
                state.loading = false;
                const deletedItemId = action.payload;
                console.log('Deleted item ID from slice:', deletedItemId);
                 state.deletedItems = state.items.filter(itemId => itemId !== deletedItemId);
               
              })
           
              .addCase(deleteReservationApi.rejected, (state) => {
                state.loading = false;
              });
          },
    })

export const { resetDeletedItems } = deleteReservationItemSlice.actions;
export default deleteReservationItemSlice.reducer;
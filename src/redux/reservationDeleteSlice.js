import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    status: "idle",
    deletedItems:[],
    loading: false,
   
}

export const deleteReservationApi = createAsyncThunk(
    "reservationDeleteItem/deleteReservationItem",
    async ({ reservationId, itemId }) => {
    

        try {
             await axios.delete(`http://127.0.0.1:3001/api/v1/items/${itemId}/reservations/${reservationId}`)
            return {
                reservationId, itemId
            };
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
                const { itemId, reservationId } = action.payload;
                state.deletedItems.push({ itemId, reservationId });
               
            })
            .addCase(deleteReservationApi.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { resetDeletedItems } = deleteReservationItemSlice.actions;
export default deleteReservationItemSlice.reducer;

// ReservationCreateSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  status: "idle", // "idle", "loading", "succeeded", "failed"
  error: null,
  reservation: null,
};

// Define the async thunk to create a reservation
export const createReservation = createAsyncThunk(
  "reservationCreate/createReservation",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:3001/api/v1/users/1/reservations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        // Handle non-2xx HTTP responses as errors
        throw new Error("Failed to create reservation");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // You can handle errors here and return a custom error message if needed
      return rejectWithValue(error.message);
    }
  }
);

// Create a slice
const reservationCreateSlice = createSlice({
  name: "reservationCreate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reservation = action.payload;
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default reservationCreateSlice.reducer;

// ReservationCreateSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  status: "idle", // "idle", "loading", "succeeded", "failed"
  error: null,
  reservation: null,
  tourOptions: [], // New state to store tour options
};

// Define an async thunk to fetch tour options
export const fetchTourOptions = createAsyncThunk(
  "reservationCreate/fetchTourOptions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://[::1]:3001/api/v1/items");

      if (!response.ok) {
        throw new Error("Failed to fetch tour options");
      }

      const data = await response.json();
      return data.map((item) => ({
        value: item.id.toString(),
        label: item.name,
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
        throw new Error("Failed to create reservation");
      }

      const data = await response.json();
      return data;
    } catch (error) {
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
      .addCase(fetchTourOptions.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTourOptions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tourOptions = action.payload; // Store tour options in state
      })
      .addCase(fetchTourOptions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
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

// Define the selectTourOptions selector
export const selectTourOptions = (state) => state.reservationCreate.tourOptions;

export default reservationCreateSlice.reducer;

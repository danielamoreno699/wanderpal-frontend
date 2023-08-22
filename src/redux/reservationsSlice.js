import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  reservations: [],
};

// fetch reservations
export const fetchReservations = createAsyncThunk(
  "reservations/fetchReservations",
  async () => {
    const response = await fetch("http://[::1]:3001/api/v1/reservations");
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Request failed!");
  }
);

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        status: "succeeded",
        reservations: action.payload,
      }))
      .addCase(fetchReservations.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }));
  },
});

export default reservationsSlice.reducer;

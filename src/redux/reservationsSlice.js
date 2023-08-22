import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  reservations: [],
  reservationInfo: {},
};

// fetch reservations
export const fetchReservations = createAsyncThunk("reservations/fetchReservations", async () => {
  const response = await fetch("http://[::1]:3001/api/v1/reservations");
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error("Request failed!");
});

// fetch reservation info
export const fetchReservationInfo = createAsyncThunk(
  "reservations/fetchReservationInfo",
  async () => {
    const response = await fetch(`http://[::1]:3001/api/v1/reservations`);
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
  reducers: {
    selectedReservation: (state, action) => {
      const selectedReservation = action.payload;
      return {
        ...state,
        reservationInfo: selectedReservation,
      };
    },
  },
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
      }))
      .addCase(fetchReservationInfo.fulfilled, (state, action) => ({
        ...state,
        status: "succeeded",
        reservationInfo: action.payload,
      }))
      .addCase(fetchReservationInfo.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }));
  },
});

export const { selectedReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;

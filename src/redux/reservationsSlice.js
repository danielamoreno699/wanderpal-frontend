import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  reservations: [],
  reservationDetails: {},
};

// fetch reservations
export const fetchReservations = createAsyncThunk(
  "reservations/fetchReservations",
  
  async (userId) => {
   
    const response = await fetch(`https://wanderpalbackend.onrender.com/api/v1/users/${userId}/reservations`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Request failed!");
  }
);

//fetch reservation details to display name and image from the item properties
export const fetchReservationDetails = createAsyncThunk(
  "reservations/fetchReservationDetails",
  async (reservationId) => {
    const response = await fetch(`https://wanderpalbackend.onrender.com/api/v1/reservations/${reservationId}/item_details`);
    if (response.ok) {
      const data = await response.json();
      return { reservationId, item: data[0] }; 
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
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchReservationDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReservationDetails.fulfilled, (state, action) => {
        const { reservationId, item } = action.payload;
        state.reservationDetails[reservationId] = { ...item, detailsFetched: true };
      })
      .addCase(fetchReservationDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setReservationDetails } = reservationsSlice.actions;
export default reservationsSlice.reducer;

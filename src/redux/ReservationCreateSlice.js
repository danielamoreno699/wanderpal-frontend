import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  error: null,

  tourOptions: [],
};

export const createReservation = createAsyncThunk(
  "reservationCreateItem/createReservationItem",

  async ({ itemId, user_id, date, city }) => {
    const payload = {
      itemId,

      user_id,
      date,
      city,
    };
    console.log(payload);

    const response = await axios.post(
      `http://127.0.0.1:3001/api/v1/items/${itemId}/reservations`,
      payload
    );
    return response.data;
  }
);

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
        state.tourOptions = action.payload;
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectTourOptions = (state) => state.reservationCreate.tourOptions;

export default reservationCreateSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./reservationsSlice";

const store = configureStore({
  reducer: {
    // This is where we add the reservationSlices.
    reservations: reservationsReducer,
  },
});

export default store;

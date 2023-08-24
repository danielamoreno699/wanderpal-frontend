import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./reservationsSlice";
import itemsReducer from "./itemsSlice";
import reservationCreateReducer from "./ReservationCreateSlice";

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    items: itemsReducer,
    reservationCreate: reservationCreateReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./reservationsSlice";
import itemsReducer from './itemsSlice';
import createReservationReducer from './reservationCreateItemSlice';
import deleteReservationReducer from './reservationDeleteSlice';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    items: itemsReducer,
    createReservationItem: createReservationReducer,
    deleteReservationItem: deleteReservationReducer
    
  },
});

export default store;

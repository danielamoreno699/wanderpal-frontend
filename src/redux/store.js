import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./reservationsSlice";
import itemsReducer from './itemsSlice';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    items: itemsReducer
  },
});

export default store;

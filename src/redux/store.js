import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./reservationsSlice";
import itemsReducer from "./itemsSlice";
import reservationCreateReducer from "./ReservationCreateSlice";
import createReservationReducer from './reservationCreateItemSlice';
import deleteReservationReducer from './reservationDeleteSlice';
import createUsersReducer from './createUsersSlice';
import usersReducer from './getUsersSlice';


const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    items: itemsReducer,
    reservationCreate: reservationCreateReducer,
    createReservationItem: createReservationReducer,
    reservationDelete: deleteReservationReducer,
    createUsers: createUsersReducer,
    users: usersReducer 
    
  },
});

export default store;

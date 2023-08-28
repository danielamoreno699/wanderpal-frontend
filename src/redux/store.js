import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./reservationsSlice";
import itemsReducer from './itemsSlice';
import createReservationReducer from './reservationCreateItemSlice';
import deleteReservationReducer from './reservationDeleteSlice';
import createUsersReducer from './createUsersSlice';
import usersReducer from './getUsersSlice';


const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    items: itemsReducer,
    createReservationItem: createReservationReducer,
    reservationDelete: deleteReservationReducer,
    createUsers: createUsersReducer,
    users: usersReducer 
    
  },
});

export default store;

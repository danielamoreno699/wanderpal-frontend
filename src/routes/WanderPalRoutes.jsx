import React, { useState } from 'react';
import { Navigate, Route, Routes} from "react-router-dom";
import Reservation from "../components/reservation";
import CustomNavbar from "../components/navbar";
import Items from "../components/items";
import ReservationForm from "../components/reservation-form";
import Home from "../components/home";
import ReserveItem from "../components/reservation-item-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const WanderPalRoutes = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <FontAwesomeIcon
        icon={faBars}
        className={`burger-icon ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <CustomNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="content-container">
        <Routes>
          <Route path="Home" element={<Home/>}/>
          <Route path="items/:id" element={<Items/>}/>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/reservation" element={<Reservation/>}/>
          <Route path="/reservationform" element={<ReservationForm />}/>
          <Route path = "/reservationItemForm/:id" element={<ReserveItem/>} />
        </Routes>
      </div>
    </div>
  );
};

export default WanderPalRoutes;

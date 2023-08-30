import { Navigate, Route, Routes} from "react-router-dom";

import Reservation from "../components/reservation";
import CustomNavbar from "../components/navbar";
import Items from "../components/items";
import ReservationForm from "../components/reservation-form";
import Home from "../components/home";
import ReserveItem from "../components/reservation-item-form";
import CreateItem from "../components/add-item";




const WanderPalRoutes = () => (

    
    <div className="app-container">
        <CustomNavbar/>
        <div className="content-container">
            <Routes>

                <Route path="Home" element={<Home/>}/>
                <Route path="items/:id" element={<Items/>}/>
                <Route path="/" element={<Navigate to="/Home" />} />

                <Route path="/reservation" element={<Reservation/>}/>
            

                <Route path="/reservationform" element={<ReservationForm />}/>
                <Route path = "/reservationItemForm/:id" element={<ReserveItem/>} />

                <Route path= "/create-item" element = { <CreateItem/>}/>
            </Routes>
        </div>


        
    </div >
);

export default WanderPalRoutes;


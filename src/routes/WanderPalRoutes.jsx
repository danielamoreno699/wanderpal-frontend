import { Navigate, Route, Routes} from "react-router-dom";


import Reservation from "../components/reservation";
import CustomNavbar from "../components/navbar";
import CarouselSlide from '../components/caroursel'
import Banner from '../components/banner'


import Items from "../components/items";
import ReservationForm from "../components/reservation-form";
import Home from "../components/home";




const WanderPalRoutes = () => (

    
    <>
        <CustomNavbar/>
        <CarouselSlide />
        < Banner />

        <Routes>
            <Route path="Home" element={<Home/>}/>
            <Route path="items/:id" element={<Items/>}/>
            <Route path="/" element={<Navigate to="/Home" />} />

            <Route path="/reservation" element={<Reservation/>}/>
            

            <Route path="/reservationform" element={<ReservationForm />}/>
        </Routes>



        
    </>
);

export default WanderPalRoutes;


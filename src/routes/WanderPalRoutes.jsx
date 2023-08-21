import { Navigate, Route, Routes} from "react-router-dom";

import Home from "../components/Home";
import Reservation from "../components/reservation";
import CustomNavbar from "../components/navbar";
import CarouselSlide from '../components/caroursel'
import Banner from '../components/banner'
import Details from "../components/details";




const WanderPalRoutes = () => (

    <>
        <CustomNavbar/>
        <CarouselSlide />
        < Banner />

        <Routes>
            <Route path="Home" element={<Home/>}/>
            <Route path="Details/:id" element={<Details/>}/>

            <Route path="/reservation" element={<Reservation/>}/>
            <Route path="/" element={<Navigate to="/Home" />} />
        </Routes>



        
    </>
);

export default WanderPalRoutes;


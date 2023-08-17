import {Navigate, Route, Routes} from "react-router-dom";
import {Navbar} from "../components/navbar";
import Home from "../components/Home";
import Reservation from "../components/reservation";



const WanderPalRoutes = () => (

    <>
        <Navbar/>

        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/reservation" element={<Reservation/>}/>
        </Routes>
    </>
);

export default WanderPalRoutes;


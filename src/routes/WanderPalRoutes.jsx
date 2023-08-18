import { Navigate, Route, Routes} from "react-router-dom";

import Home from "../components/Home";
import Reservation from "../components/reservation";
import CustomNavbar from "../components/navbar";




const WanderPalRoutes = () => (

    <>
        <CustomNavbar/>

        <Routes>
            <Route path="Home" element={<Home/>}/>
            <Route path="/reservation" element={<Reservation/>}/>
            <Route path="/" element={<Navigate to="/Home" />} />
        </Routes>
    </>
);

export default WanderPalRoutes;


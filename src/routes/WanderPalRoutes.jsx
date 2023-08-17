import { Navigate, Route, Routes} from "react-router-dom";

import Home from "../components/Home";
import Reservation from "../components/reservation";
import Navbar from "../components/navbar";




const WanderPalRoutes = () => (

    <>
        <Navbar/>

        <Routes>
            <Route path="Home" element={<Home/>}/>
            <Route path="/reservation" element={<Reservation/>}/>
            <Route path="/" element={<Navigate to="/Home" />} />
        </Routes>
    </>
);

export default WanderPalRoutes;


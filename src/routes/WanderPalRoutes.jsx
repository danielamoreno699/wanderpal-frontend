import { Route, Routes} from "react-router-dom";

import Home from "../components/Home";
import Reservation from "../components/reservation";
import Navbar from "../components/navbar";




const WanderPalRoutes = () => (

    <>
        <Navbar/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/reservation" element={<Reservation/>}/>
        </Routes>
    </>
);

export default WanderPalRoutes;


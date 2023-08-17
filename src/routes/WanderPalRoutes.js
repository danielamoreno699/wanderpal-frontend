import {Navigate, Route, Routes} from "react-router-dom";
import {Navbar} from "../components/navbar";
import Home from "../components/Home";



const WanderPalRoutes = () => (

    <>
        <Navbar/>

        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    </>
);

export default WanderPalRoutes;


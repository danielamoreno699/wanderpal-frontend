import { useLocation, Navigate, Outlet } from "react-router-dom";
import  useAuth  from "../context/AuthProvider";

const RequiredAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return(
        auth?.user
        ? <Outlet />
        : <Navigate to={{pathname: "/login", state: {from: location}}} replace />
    );

};

export default RequiredAuth;
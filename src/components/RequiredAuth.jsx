import { useLocation, Navigate, Outlet } from "react-router-dom";
import  useAuth  from "../hooks/useAuth";

const RequiredAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return(
        auth?.roles?.includes("user")
        ? <Outlet />
        : <Navigate to={{pathname: "/login", state: {from: location}}} replace />
    );

};

export default RequiredAuth;
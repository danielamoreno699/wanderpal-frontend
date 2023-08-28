
import { Navigate } from 'react-router-dom';
import {useAuth} from '../context/AuthProvider';


const PrivateRoute = ({children}) => {
    const { isLoggedIn } = useAuth();

    if (isLoggedIn === true) {
      children
    } else {
      return <Navigate to="/login" />;
    }
}

export default PrivateRoute;

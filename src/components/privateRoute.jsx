
import {  Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import PropTypes from 'prop-types'; 

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth(); 

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired, 
  };

export default PrivateRoute;

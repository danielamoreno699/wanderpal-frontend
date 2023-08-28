import  { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const RequiredAuth = () => {
    const { auth } = useAuth();
    const [usernames, setUsernames] = useState([]);
  
    const fetchUsernames = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:3001/api/v1/users'
        );
        setUsernames(response.data.map(user => user.name)); // Extracting usernames from the response
      } catch (error) {
        console.error('Error fetching usernames:', error);
      }
    };
  
    useEffect(() => {
      fetchUsernames();
    }, []);
  
    const checkUsernameExistence = (username) => {
      return usernames.includes(username);
    };
  
    if (auth && auth.username) {
      const usernameExists = checkUsernameExistence(auth.username);
      
      if (usernameExists) {
        return <Outlet />;
      } else {
        return <Navigate to="/login" replace />;
      }
    } else {
      return <Navigate to="/login" replace />;
    }
  };

export default RequiredAuth;
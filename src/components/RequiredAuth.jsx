import  { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const RequiredAuth = () => {
  const { auth } = useAuth();
  const [usernames, setUsernames] = useState([]);
  const [setLoading] = useState(true);

  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3001/api/v1/users');
        setUsernames(response.data.map(user => user.name));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching usernames:', error);
        setLoading(false);
      }
    };

    fetchUsernames();
  }, []);

  

  if (auth && auth.username) {
    const usernameExists = usernames.includes(auth.username);

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

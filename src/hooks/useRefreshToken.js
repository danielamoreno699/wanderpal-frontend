import axios from "axios";
import { useAuth } from "./useAuth"; 

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3001/api/v1/users/refresh_token', {
                withCredentials: true,
            });

            setAuth(prevAuth => ({
                ...prevAuth,
                accessToken: response.data.accessToken,
            }));

            return response.data.accessToken;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return  refresh ;
};

export default useRefreshToken;

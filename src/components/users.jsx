import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/getUsersSlice';
import { useNavigate, useLocation } from 'react-router-dom';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.getUsers.users);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let mounted = true;
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                if (mounted) {
                    await dispatch(fetchUsers({ signal: controller.signal }));
                }
            } catch (err) {
                console.error(err);
                navigate('/login', { state: {from:location}, replace:true }); 
            }
        };

        fetchData(); 

        return () => {
            mounted = false;
            controller.abort();
        };
    }, [dispatch, navigate, location]); 

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default Users;

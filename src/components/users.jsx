import  { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../redux/getUsersSlice';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.getUsers.users);

    useEffect(() => {
        let mounted = true;
        const controller = new AbortController();

        dispatch(fetchUsers({ signal: controller.signal }));

        return function cleanup() {
            mounted = false;
            controller.abort(); 
        };
    }, [dispatch]);

    return (
        <div>
           
            {users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
}

export default Users;

import  { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { userAuthApi } from '../redux/createUsersSlice';

import useAuth from '../hooks/useAuth';

const Login = () => {
    const { setAuth } = useAuth();
    const location = useLocation();
    const home = location.state?.from || { pathname: '/' };

    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const [userId, setUserId] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);



    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user, userId ) {
            try {
                

                const response = await dispatch(userAuthApi({ name: user, userId }));
    
                console.log('response:', response);

                if (response) {
                   
                    setAuth(true);
                    navigate(home, { replace: true });
                }
            } catch (error) {
                setErrMsg('Invalid username');
            } finally {
                setAuth(false);
            }
        } else {
            setErrMsg('Please enter both username');
            userRef.current.focus();
        }
    };

    return (
        <>
            <section>
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                    {errMsg}
                </p>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />

                    <button >Sign in</button>
                </form>

                <p>
                    Dont have an account? <br />
                    <span className="line">
                        <a href="/registration">Register</a>
                    </span>
                </p>
            </section>
        </>
    );
};

export default Login;

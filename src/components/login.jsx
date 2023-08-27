import  { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import useAuth from '../hooks/useAuth';
import { userAuthApi } from '../redux/createUsersSlice';
import { useSelector } from 'react-redux';


const Login = () => {

    const { loggingIn } = useSelector((state) => state.getUsers);


    const { setAuth } = useAuth();
    const location = useLocation();
    const home = location.state?.from || { pathname: '/' };

    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const dispatch = useDispatch(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user && pwd) {
            try {
                dispatch(loggingIn());
                const response = await dispatch(userAuthApi({ user, password: pwd }));
                console.log('response:', response);
                if (response) {
                    setAuth(true);
                    loggingIn
                    navigate(home, { replace: true });
                }
            } catch (error) {
                setErrMsg('Invalid username or password');
                
            }
        } else {
            setErrMsg('Please enter both username and password');
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

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        ref={pwd} 
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Sign in</button>
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

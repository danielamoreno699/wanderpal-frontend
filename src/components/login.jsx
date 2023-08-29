import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/getUsersSlice';
import { useAuth } from '../context/AuthProvider';






const Login = () => {
   
    const {  login } = useAuth();
    

    const dispatch = useDispatch();


 
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

      
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (user) {
          try {
            const fetchUsersResponse = await dispatch(fetchUsers());
            const users = fetchUsersResponse.payload;
      
            const matchedUser = users.find((u) => u.name === user);
      
            if (matchedUser) {
              localStorage.setItem('user_id', matchedUser.id);
                login();
              navigate('/Home');
            } else {
              setErrMsg('Username does not exist');
            }
          } catch (error) {
            console.error('Error fetching users:', error);
            setErrMsg('Error occurred');
          }
        } else {
          setErrMsg('Please enter both username and userId');
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
                    <button>Sign in</button>
                </form>
                <p>
                    Dont have an account? <br />
                    <span className="line">
                        <a href="/registration">Register</a>
                    </span>
                </p>
                <p>
                   <br />
                    <span className="line">
                        <a href="/">home</a>
                    </span>
                </p>
            </section>
        </>
    );
};

export default Login;

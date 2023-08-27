import {useRef, useState, useEffect} from 'react'
import { useNavigate,  useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Login = () => {

    const {setAuth} = useAuth();
    const location = useLocation();
    const home = location.state?.from || {pathname: '/'};

    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
  

    useEffect(()=>{
        userRef.current.focus();
    }, [])

    useEffect(()=>{
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(user && pwd){
            navigate(home, {replace: true})
            setAuth(true);
            
        }else{
            setErrMsg('Invalid username or password');
            userRef.current.focus();
        }

    }

  return (
    <>
    <section>
        
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            id="username" 
            ref={userRef} 
            autoComplete='off'
            onChange={(e)=>setUser(e.target.value)} 
            value={user} 
            required
            />

            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            id="password" 
            ref={userRef} 
            onChange={(e)=>setPwd(e.target.value)} 
            value={pwd} 
            required
            />
            <button>
                Sign in
            </button>
        </form>

        <p>
            Dont have an account? <br/>
            <span className='line'>
                <a href='/registration'>Register</a>

            </span>
        </p>


    </section>
  
    </>
  )
}

export default Login

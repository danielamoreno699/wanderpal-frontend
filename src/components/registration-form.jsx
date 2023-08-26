import {useRef, useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/registration.css'
import { createUsersApi } from '../redux/createUsersSlice';
import Swal from 'sweetalert2';



const USER_REGEX = /^[a-zA-Z0-9]{3,20}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const PWD_REGEX = /.{6,}/;

const RegistrationForm = () => {
    
    const dispatch = useDispatch();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [ pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [success, setSuccess] = useState(false)

    useEffect(()=>{
        userRef.current.focus();
    }, [])

    useEffect(()=>{
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result)
    }, [user])

    useEffect(() => {
        console.log("pwd:", pwd);
        console.log("matchPwd:", matchPwd);
        
        const result = PWD_REGEX.test(pwd);
        console.log("pwd validity:", result);
      
        const match = pwd.trim() === matchPwd.trim();
        console.log("pwd match:", match);
        
        setValidPwd(result);
        setValidMatch(match);
      }, [pwd, matchPwd]);

    useEffect(()=>{
        setErrMsg('');
    }, [pwd, matchPwd])

    const handleSubmit = async(e) => {
        e.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if(!v1 || !v2){
            setErrMsg('Invalid username or password');
            return;
        }

    const response =  await dispatch(createUsersApi({user, pwd}));
      console.log('User Response:', response); 
  
      if (response) {
        setSuccess(true);
        Swal.fire({
          icon: 'success', 
          text: 'User created successfully!',
        });
      }else if (errMsg.response?.status === 409) {
        setErrMsg('Username already exists!');
    } else {
        setErrMsg('Something went wrong!');
    }
    errRef.current.focus();
}

  return ( 
    <section> 
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>
                Username:
                <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>

                </span >
                <span className={validName || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>

                </span>
            </label>

            <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            required
            aria-describedby='uidnote'
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            />

        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
        <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters <br/>
        Must begin with a letter <br/>
        </p>


            <label htmlFor='password'>
                Password:
                <span className={validPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>

                </span >
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>

                </span>
            </label>

            <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-describedby='pwdnote'
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            />

            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle}  />
                4 to 24 characters <br/>
                Must begin with letter <br/>
            </p>
            
            <label htmlFor='confirm_pwd'>
                Confirm Password:
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>

                </span >
                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>

                </span>
            </label>

            <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            required
            aria-describedby='confirmnote'
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            />

            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle}  />
                must match the password <br/>
                
            </p>

          <button disabled={!validName || !validPwd || !validMatch ? true : false}>
                Sign up
          </button>

                <p>
                    Already registered? <br/>
                    <span className="line">
                        <a href="/login">Login</a>
                    </span>

                </p>

        </form>

    </section>
  )
}

export default RegistrationForm;

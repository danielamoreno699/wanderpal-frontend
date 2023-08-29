import {useRef, useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/registration.css'
import { createUsersApi } from '../redux/createUsersSlice';
import Swal from 'sweetalert2';



const USER_REGEX = /^[a-zA-Z0-9]{3,20}$/;


const RegistrationForm = () => {
    
    const dispatch = useDispatch();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);



    const [errMsg] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [success, setSuccess] = useState(false)

    useEffect(()=>{
        userRef.current.focus();
    }, [])

    useEffect(()=>{
        const result = USER_REGEX.test(user);
        setValidName(result)
    }, [user])

    

    

    const handleSubmit = async(e) => {
        e.preventDefault();

        

        const response = await dispatch(createUsersApi({ user: user }));

    
  
      if (response) {
        setSuccess(true);
        Swal.fire({
          icon: 'success', 
          text: 'User created successfully!',
        });
    } else {
        Swal.fire({
            icon: 'danger', 
            text: 'User was not created!',
          });
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


          
           
          <button disabled={!validName  ? true : false}>
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

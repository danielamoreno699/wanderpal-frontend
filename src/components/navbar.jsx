import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useAuth } from '../context/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/CustomNavbar.css";
import { AiFillFacebook, AiFillGoogleCircle, AiFillPhone, AiOutlineShop, AiOutlineShopping, AiOutlineTwitter, AiTwotoneMail } from 'react-icons/ai';



// eslint-disable-next-line react/prop-types
const CustomNavbar = ({isMenuOpen}) => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();
  const onLogout = () => {
    logout();
    navigate('/Home');
    localStorage.removeItem('user_id');
  };

  return (
    <header className="nav-container">
      <Navbar className={` p-0 d-flex  ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="sidebar">
          <div className="logo-container"/> 

          <Nav as="ul" className={`m-3 d-flex flex-column ${isMenuOpen ? 'active' : ''}`}>
            {isLoggedIn ? (
              <>
                <Nav.Item as="li">
                  <Nav.Link className="
                  " onClick={onLogout}>
                    {<AiOutlineShopping className='react-icon'/>}
                    Log out
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="
                ">
                  <Nav.Link
                    className={`
                     ${location.pathname === '/Home' ? 'active-link' : ''}`}
                    href="/Home"
                  >
                    HOME
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="
                ">
                  <Nav.Link
                    className={`
                     ${location.pathname === '/reservation' ? 'active-link' : ''}`}
                    href="/reservation"
                  >
                    RESERVATIONS
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="
                ">
                  <Nav.Link
                    className={`
                     ${location.pathname === '/reservationform' ? 'active-link' : ''}`}
                    href="/reservationform"
                  >
                    MAKE A RESERVATION
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="
                ">
                  <Nav.Link
                    className={`

                     ${location.pathname === '/create-item' ? 'active-link' : ''}`}
                    href="/create-item"
                  >
                    ADD ITEM
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="
                ">
                  <Nav.Link
                    className={`

               
                   ${location.pathname === '/delete-items' ? 'active-link' : ''}`}
                    href="/delete-items"
                  >
                    DELETE ITEM
                  </Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item as="li" className="
                ">
                  <Nav.Link
                    className={`
                     ${location.pathname === '/login' ? 'active-link' : ''}`}
                    href="/login"
                  >
                    {<AiOutlineShopping className='react-icon'/>}
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="
                ">
                  <Nav.Link
                    className={`
                     ${location.pathname === '/registration' ? 'active-link' : ''}`}
                    href="/registration"
                  >
                  {<AiOutlineShop className='react-icon'/>}
                    Sign Up
                  </Nav.Link>
                   

                </Nav.Item>
              </>
            )}
            
          </Nav>
          <footer>
            {/* Contacts */}
            <div className="contacts flex-fill fit-content">
                <Nav as="ul" className="m-1 fit-content flex-column">
                  <Nav.Item as="li" className="fit-content">
                    <Nav.Link href="#" disabled className="fit-content">
                      {<AiFillPhone className='icon-react'/>}
                      0.703.1352.411
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="fit-content">
                    <Nav.Link className="fit-content asdw" href="#" disabled>
    

                      {<AiTwotoneMail className='navbar-icon' />}
                      WanderPalTour@email.com
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>

            {/* Socials */}
            <div className="socials fit-content">
                <Nav as="ul" className="m-1">
                  <Nav.Item as="li">
                    <Nav.Link href="#">
                      {<AiFillFacebook className="react-icon"/> }
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#">
                      {<AiFillGoogleCircle className="react-icon"/>}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#">
                      {<AiOutlineTwitter className='react-icon'/>}
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              </footer>
        </div>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;

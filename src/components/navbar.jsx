import React, { useState } from 'react';  // Asegúrate de tener "useState" aquí
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useAuth } from '../context/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/CustomNavbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú desplegable
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation(); // Obtén la ruta actual
  
  const onLogout = () => {
    logout();
    navigate('/Home');
    localStorage.removeItem('user_id');
  };

  return (
    <header className="nav-container">
      <Navbar className="p-0 d-flex">
        <div className="sidebar">
        <FontAwesomeIcon
      icon={faBars}
      className={`burger-icon ${isMenuOpen ? 'active' : ''}`}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    />
          <Nav as="ul" className={`m-3 d-flex flex-column ${isMenuOpen ? 'active' : ''}`}>
            {isLoggedIn ? (
              <>
                <Nav.Item as="li" className="
                ">
                  <Nav.Link className="
                  " onClick={onLogout}>
                    <img
                      src="/src/assets/padlock.png"
                      width="17"
                      height="17"
                      className="flaticon-nav m-1 
                      "
                      alt="logout"
                    />
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
                     ${location.pathname === '/reservationform' ? 'active-link' : ''}`}
                    href="/reservationform"
                  >
                    ADD ITEM
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="
                ">
                  <Nav.Link
                    className={`
                     ${location.pathname === '/reservationform' ? 'active-link' : ''}`}
                    href="/reservationform"
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
                    <img
                      src="/src/assets/padlock.png"
                      width="17"
                      height="17"
                      className="flaticon-nav m-1 
                      "
                      alt="login"
                    />
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
                    <img
                      src="/src/assets/user.png"
                      width="17"
                      height="17"
                      className="flaticon-nav m-1 
                      "
                      alt="signup"
                    />
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </>
            )}
          </Nav>
        </div>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;

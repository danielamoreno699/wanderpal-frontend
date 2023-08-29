
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from '../context/AuthProvider'; 

const CustomNavbar = () => {
  
  const { isLoggedIn, logout } = useAuth(); 

  const onLogout = () => {
    logout();
    localStorage.removeItem('user_id');

  };

  return (
    <>
      <Navbar className="_my-top-navbar navbar grey-border p-0 full-width">
        {/* ... Existing code ... */}
        <div className="d-flex login justify-content-end grey-border-left fit-content">
          <Nav as="ul" className="m-2 justify-content-end fit-content">
            {isLoggedIn ? (

              <>
                <Nav.Item as="li" className="fit-content">
                  <Nav.Link className="fit-content" onClick={onLogout}>
                    <img
                      src="/src/assets/padlock.png"
                      width="17"
                      height="17"
                      className="flaticon-nav m-1 fit-content"
                      alt="logout"
                    />
                    Log out
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="fit-content">
                    <Nav.Link className="fit-content" href="/Home">
                      HOME
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="fit-content">
                    <Nav.Link className="fit-content" href="/reservation">
                      RESERVATIONS
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="fit-content">
                    <Nav.Link className="fit-content" href="/reservationform">
                      MAKE A RESERVATION
                    </Nav.Link>
                  </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item as="li" className="fit-content">
                  <Nav.Link className="fit-content" href="/login">
                    <img
                      src="/src/assets/padlock.png"
                      width="17"
                      height="17"
                      className="flaticon-nav m-1 fit-content"
                      alt="login"
                    />
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="fit-content">
                  <Nav.Link className="fit-content" href="/registration">
                    <img
                      src="/src/assets/user.png"
                      width="17"
                      height="17"
                      className="flaticon-nav m-1 fit-content"
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

    </>
  );
};

export default CustomNavbar;

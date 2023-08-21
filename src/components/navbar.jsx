import '../styles/Navbar.css';
// import { Link, NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const CustomNavbar = () => {
    return (
      <>
        <Navbar className="_my-top-navbar navbar grey-border p-0 full-width">
          <Container
            fluid
            className="d-flex top-container justify-content-center"
          >
            <div className="d-flex container-fluid bg-light justify-content-between align-items-center">
              {/* Contacts */}
              <div className="contacts flex-fill fit-content">
                <Nav as="ul" className="m-1 fit-content">
                  <Nav.Item as="li" className="fit-content m-1">
                    <Nav.Link href="#" disabled className="fit-content">
                      <img
                        src="/src/assets/phone-call.png"
                        width="17"
                        height="17"
                        className="flaticon-nav m-1 fit-content"
                        alt="icon"
                      />
                      0.703.1352.411
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="fit-content m-1">
                    <Nav.Link className="fit-content" href="#" disabled>
                      <img
                        src="/src/assets/envelope.png"
                        width="20"
                        height="20"
                        className="flaticon-nav m-1 fit-content"
                        alt="icon"
                      />
                      Contact@WanderPalTour.com
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>

              {/* Socials */}
              <div className="socials fit-content">
                <Nav as="ul" className="m-1">
                  <Nav.Item as="li">
                    <Nav.Link href="#">
                      <img
                        src="/src/assets/facebook.png"
                        width="20"
                        height="20"
                        className="flaticon-nav m-2 fit-content"
                        alt="facebook-icon"
                      />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#">
                      <img
                        src="/src/assets/google.png"
                        width="20"
                        height="20"
                        className="flaticon-nav m-2 fit-content"
                        alt="google-plus"
                      />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#">
                      <img
                        src="/src/assets/twitter.png"
                        width="20"
                        height="20"
                        className="flaticon-nav m-2 fit-content"
                        alt="twitter"
                      />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              {/* Login */}
              <div className="d-flex login justify-content-end grey-border-left fit-content">
                <Nav as="ul" className="m-2 justify-content-end fit-content">
                  <Nav.Item as="li" className="fit-content">
                    <Nav.Link className="fit-content">
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
                    <Nav.Link className="fit-content">
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
                </Nav>
              </div>
            </div>
          </Container>
        </Navbar>
        {/* Second Navbar */}
        <Navbar
          expand="md"
          className=" full-width justify-content-center translucent"
          sticky="top"
          collapseOnSelect
        >
          <Container className="d-flex justify-content-between align-items-center full-width m-0 transparent">
            <Navbar.Brand href="#home" className="fit-content">
              <img
                src="/src/assets/logo.png"
                width="100"
                height="100"
                className="logo-margin fit-content"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="second-navbar-nav"
              className="hamburger fit-content"
            />
            <Navbar.Collapse
              id="second-navbar-nav"
              className="fit-content justify-content-end "
            >
              <Nav
                className="_second-navbar d-flex justify-content-end fit-content"
                as="ul"
                variant="underline"
              >
                <Nav.Item as="li" className="fit-content">
                  <Nav.Link className="fit-content" href="/">
                    HOME
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="fit-content">
                  <Nav.Link className="fit-content" href="/reservation">
                    RESERVATIONS
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="fit-content">
                  <Nav.Link className="fit-content" href="#">
                    MAKE A RESERVATION
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}

export default CustomNavbar;

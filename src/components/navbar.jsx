import '../styles/Navbar.css';
// import { Link, NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const CustomNavbar = () => {
    return (
      <>
        <Navbar className="_my-top-navbar navbar h-fit-content grey-border p-0">
          <Container
            fluid
            className="d-flex top-container justify-content-center"
          >
            <Navbar.Collapse>
              <div className="d-flex container-fluid bg-light justify-content-between align-items-center">
                {/* Contacts */}
                <div className="contacts flex-fill">
                  <Nav as="ul" className="m-2">
                    <Nav.Item as="li">
                      <Nav.Link href="#" disabled>
                        <img
                          src="/src/assets/phone-call.png"
                          width="17"
                          height="17"
                          className="flaticon-nav m-1"
                          alt="icon"
                        />
                        0.703.1352.411
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#" disabled>
                        <img
                          src="/src/assets/envelope.png"
                          width="20"
                          height="20"
                          className="flaticon-nav m-1"
                          alt="icon"
                        />
                        Contact@WanderPalTour.com
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>

                {/* Socials */}
                <div className="socials">
                  <Nav as="ul" className="m-2">
                    <Nav.Item as="li">
                      <Nav.Link href="#">
                        <img
                          src="/src/assets/facebook.png"
                          width="20"
                          height="20"
                          className="flaticon-nav m-1"
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
                          className="flaticon-nav m-1"
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
                          className="flaticon-nav m-1"
                          alt="twitter"
                        />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>

                {/* Login */}
                <div className="d-flex login justify-content-end grey-border-left">
                  <Nav as="ul" className="m-2">
                    <Nav.Item as="li">
                      <Nav.Link>
                        <img
                          src="/src/assets/padlock.png"
                          width="17"
                          height="17"
                          className="flaticon-nav m-1"
                          alt="login"
                        />
                        Login
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link>
                        <img
                          src="/src/assets/user.png"
                          width="17"
                          height="17"
                          className="flaticon-nav m-1"
                          alt="signup"
                        />
                        Sign Up
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="#home">
              <img
                src="/src/assets/logo.png"
                width="100"
                height="100"
                alt="logo"
              />
            </Navbar.Brand>
            <Nav className="_second-navbar" variant="underline">
              <Nav.Item>
                <Nav.Link href="/">HOME</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/reservation">RESERVATIONS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">MAKE A RESERVATION</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default CustomNavbar;

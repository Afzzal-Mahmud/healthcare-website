import React from "react";
import "./Header.css"
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function Header() {
    const {user,logOut} = useAuth()
    return(
        <Navbar collapseOnSelect expand="lg" className='nav-bar sticky-top'>
  <Container className='padding'>
  <Navbar.Brand href="#home"> <h3 className='fw-bold'>Madico <span className='primary-color'>Care</span></h3> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto fw-bold">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
      <Nav.Link as={Link} to="/whychooseus">Why Choose Us</Nav.Link>

      {/* showing the user name on header if he is log In */}
      {user.email && <Nav.Link>{user?.displayName}</Nav.Link>}

    </Nav>
    <Nav>
      <Nav.Link eventKey={2}>
        {/* render conditionali if user have already logIn display LogOut btn or See the logIn button and on clicking the log In button it will take back to the home components */}
      {
        user.email ? 
        <Nav.Link as={Link} to='/home'>  
        <Button 
        onClick={logOut}
        className='primary-background' 
        >Log Out</Button>
        </Nav.Link>

        : 

        <Nav.Link as={Link} to="/login">
        <Button className='primary-background'>Log In</Button>
        </Nav.Link>
      }
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default Header;
import React from "react";
import "./Header.css"
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" className='nav-bar sticky-top'>
  <Container className='padding'>
  <Navbar.Brand href="#home"> <h3>Every <span className='primary-color'>Care</span></h3> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto fw-bold">
      <Nav.Link as={HashLink} to="home/#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="home/#services">Services</Nav.Link>
      <Nav.Link as={Link} to="doctors">Doctors</Nav.Link>
      <Nav.Link as={Link} to="products">Products</Nav.Link>

    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#login">
        <Button className='primary-background'>Log In</Button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default Header;
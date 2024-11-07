import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Container>
        <Navbar
          className="custom-navbar"
          fixed="top"
          expand="lg"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/" className="d-flex align-items-center">
              {" "}
              {/* Changed href to / */}
              <img
                src="images/Color logo with background.png"
                alt="Apps-Craft Logo"
                width="150"
                height="100"
                className="d-inline-block align-top me-3"
              />
              <Nav className="d-flex flex-row">
                <Nav.Link as={Link} to="/contact" className="nav-link me-4">
                  {" "}
                  {/* Changed href to /contact and used Link */}
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to="/testimonials" className="nav-link">
                  Testimonials
                </Nav.Link>
              </Nav>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;

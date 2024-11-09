import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../App.css";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function Header({ language, onLanguageChange }) {
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
              <img
                src="images/Color logo with background.png"
                alt="Apps-Craft Logo"
                width="150"
                height="100"
                className="d-inline-block align-top me-3"
              />
              <Nav className="d-flex flex-row">
                <Nav.Link as={Link} to="/contact" className="nav-link me-3">
                  <FormattedMessage id="header.contact" />
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/testimonials"
                  className="nav-link me-3"
                >
                  <FormattedMessage id="header.testimonials" />
                </Nav.Link>
              </Nav>
            </Navbar.Brand>
            <div className="d-flex">
              {" "}
              {/* Added a div to wrap the buttons */}
              <button
                onClick={() => onLanguageChange("en")}
                className={language === "en" ? "active-language" : ""}
              >
                <img
                  src="images/ENG.png"
                  alt="English"
                  width="40"
                  height="30"
                  className="d-inline-block align-top"
                />
              </button>
              <button
                onClick={() => onLanguageChange("fr")}
                className={language !== "en" ? "active-language" : ""}
              >
                <img
                  src="images/FR.png"
                  alt="French"
                  width="40"
                  height="30"
                  className="d-inline-block align-top"
                />
              </button>
            </div>{" "}
            {/* Close the div */}
          </Container>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;

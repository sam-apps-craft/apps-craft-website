import React from "react";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <footer className="py-4">
      <Container className="text-center">
        <div className="social-links d-flex justify-content-center mb-5">
          <a
            href="https://www.facebook.com/profile.php?id=61550978790816"
            target="_blank"
            rel="noopener noreferrer"
            title="Go to my Facebook page"
            className="me-4" // Add margin-right
          >
            <i className="fa-brands fa-facebook fa-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/samantha-raymond-92425393/"
            target="_blank"
            rel="noopener noreferrer"
            title="Go to my LinkedIn page"
            className="me-4" // Add margin-right
          >
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <a
            href="https://github.com/sam-apps-craft"
            target="_blank"
            rel="noopener noreferrer"
            title="Go to my GitHub profile page"
          >
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

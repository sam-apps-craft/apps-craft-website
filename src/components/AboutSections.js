import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function AboutSections() {
  return (
    <section id="about" className="py-5 ">
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Serving Clients Across Borders</h2>
            <p>
              Based in the UK and France, we serve a growing client base across
              borders. We're committed to delivering high-quality web solutions
              that help businesses succeed, no matter where they're located.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="images/World Wide Reach.png"
              alt="World Wide Reach"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSections;

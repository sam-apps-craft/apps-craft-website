import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function OurServices() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src="images/Computer to Mobile.png"
            alt="Computer to Mobile"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <h2>Empowering Businesses Through Technology</h2>
          <p>
            We offer a comprehensive suite of services to help businesses thrive
            in the digital age:
          </p>
          <ul>
            <li>Responsive Websites</li>
            <li>E-commerce Solutions</li>
            <li>Mobile Apps (Android, iOS, Windows)</li>
            <li>Custom Business Software (Intranet/Extranet)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default OurServices;

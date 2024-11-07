import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function AboutAppsCraft() {
  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          {" "}
          {/* Text takes up the full width on medium and larger screens */}
          <h2>Crafting Standout Bespoke Solutions</h2>
          <p>
            Apps-Craft specializes in creating.  We build
            and deploy responsive websites, mobile apps, and custom computer
            programs tailored to your needs.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="d-flex flex-wrap justify-content-center">
          {" "}
          {/* Images centered below the text */}
          <Image
            src="images/Simple App.png"
            alt="Simple App"
            className="img-fluid me-3"
          />
          <Image
            src="images/Simple App 2.png"
            alt="Simple App 2"
            className="img-fluid me-3"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutAppsCraft;

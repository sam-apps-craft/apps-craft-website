import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function OurApproach() {
  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <h2>Collaborative and Bespoke Solutions</h2>
          <p>
            At Apps-Craft, we believe in a collaborative approach. We work
            closely with our clients to understand their unique requirements and
            build bespoke solutions that meet their specific needs and budget.
            Our development process is transparent and iterative, ensuring your
            approval at every stage.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="d-flex flex-wrap justify-content-center">

          <Image
            src="images/Critical Path Analysis the beginning.png"
            alt="Critical Path Analysis the beginning"
            className="img-fluid mb-3"
            style={{ maxWidth: "70%" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default OurApproach;
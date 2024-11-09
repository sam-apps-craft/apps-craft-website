import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FormattedMessage } from "react-intl";

function OurApproach() {
  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <h2>
            <FormattedMessage id="approach.heading" />
          </h2>
          <p>
            <FormattedMessage id="approach" />
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

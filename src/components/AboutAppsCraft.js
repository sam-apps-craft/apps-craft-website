import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FormattedMessage } from "react-intl";

function AboutAppsCraft() {
  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <h2>
            <FormattedMessage id="navigation.aboutAppsCraftHeading" />
          </h2>
          <p>
            <FormattedMessage id="navigation.aboutAppsCraft" />
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="d-flex flex-wrap justify-content-center">
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

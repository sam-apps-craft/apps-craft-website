import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FormattedMessage } from "react-intl";

function AboutSections() {
  return (
    <section id="about" className="py-5 ">
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>
              <FormattedMessage id="navigation.aboutHeading" />
            </h2>
            <p>
              <FormattedMessage id="navigation.about" />
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

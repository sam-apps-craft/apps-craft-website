import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FormattedMessage } from "react-intl";

function CustomerTestimonials() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="main-heading">
          <FormattedMessage id="customer.heading" />
        </h2>

        <Row className="mt-4">
          <Col md={6}>
            <Image
              src="images/SPM webpage.png"
              alt="SPM Webpage"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h4>
              <FormattedMessage id="customer.test1heading" />
            </h4>
            <p>
              <FormattedMessage id="customer.test1" />
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6}>
            <h4>
              <FormattedMessage id="customer.test2heading" />
            </h4>
            <p>
              <FormattedMessage id="customer.test2" />
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="images/Mobile App on the floor.jpg"
              alt="Mobile App on the floor"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CustomerTestimonials;

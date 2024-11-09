import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FormattedMessage } from "react-intl";

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
          <h2>
            <FormattedMessage id="navigation.servicesHeading" />
          </h2>
          <p>
            <FormattedMessage id="navigation.services" />
          </p>
          <ul>
            <li>
              <FormattedMessage id="navigation.servicesList1" />
            </li>
            <li>
              <FormattedMessage id="navigation.servicesList2" />
            </li>
            <li>
              <FormattedMessage id="navigation.servicesList3" />
            </li>
            <li>
              <FormattedMessage id="navigation.servicesList4" />
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default OurServices;

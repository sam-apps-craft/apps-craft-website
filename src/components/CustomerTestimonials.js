import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function CustomerTestimonials() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="main-heading">Customer Testimonials</h2>

        <Row className="mt-4">
          <Col md={6}>
            <Image
              src="images/SPM webpage.png"
              alt="SPM Webpage"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h4>SPM Webpage</h4>
            <p>
              "I'm absolutely thrilled with my new website! The launch was
              fantastic, and the drone footage was an incredible touch. Sam's
              ideas and enthusiasm were infectious throughout the entire
              process. The website perfectly captures the essence of my
              business, and I'm already seeing a positive impact."
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6}>
            <h4>Société Provencal de Méchanique</h4>
            <p>
              "Our bespoke web and mobile app intranet program is a
              game-changer! Sam took our long and complicated quotation process
              and transformed it into an automated system. Now, our machine
              hours are recorded on the mobile app by the machine in the
              engineering room, and the quotation mathematics produces PDF
              quotations, sends reminders, and even confirms orders
              automatically. It also handles supplier orders, stock updates, and
              machine hour records - all in one place. It's simply brilliant!"
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

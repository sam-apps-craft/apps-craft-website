import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import AboutAppsCraft from "./components/AboutAppsCraft";
import OurServices from "./components/OurServices";
import OurApproach from "./components/OurApproach";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AboutSections from "./components/AboutSections";
import CustomerTestimonials from "./components/CustomerTestimonials";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <AboutSections />
                <OurServices />
                <AboutAppsCraft />
                <OurApproach />
              </main>
            }
          />
          <Route path="/testimonials" element={<CustomerTestimonials />} />
          <Route
            path="/contact"
            element={
              <section id="contact" className="py-5">
                <Container>
                  <h2 className="main-heading">Let's Discuss</h2>
                  <p class="text-center">
                    Contact us today to discuss your project and explore the
                    details and requirements and let Apps-Craft put a proposal
                    to you.
                  </p>
                  <ContactForm />
                </Container>
              </section>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

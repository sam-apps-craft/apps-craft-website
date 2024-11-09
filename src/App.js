import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import AboutAppsCraft from "./components/AboutAppsCraft";
import OurServices from "./components/OurServices";
import OurApproach from "./components/OurApproach";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AboutSections from "./components/AboutSections";
import CustomerTestimonials from "./components/CustomerTestimonials";
import { IntlProvider } from "react-intl";
import enMessages from "./languages/en.json";
import frMessages from "./languages/fr.json";

const messages = {
  en: enMessages,
  fr: frMessages,
};

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        {" "}
        {/* Moved Router outside the div */}
        <div>
          <Header language={language} onLanguageChange={handleLanguageChange} />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <AboutSections language={language} />
                  <OurServices language={language} />
                  <AboutAppsCraft language={language} />
                  <OurApproach language={language} />
                </main>
              }
            />
            <Route
              path="/testimonials"
              element={<CustomerTestimonials language={language} />}
            />
            <Route
              path="/contact"
              element={
                <section id="contact" className="py-5">
                  <Container>
                    <h2 className="main-heading">Let's Discuss</h2>
                    <p className="text-center">
                      Contact us today to discuss your project and explore the
                      details and requirements and let Apps-Craft put a proposal
                      to you.
                    </p>
                    <ContactForm language={language} />
                  </Container>
                </section>
              }
            />
          </Routes>
          <Footer language={language} />
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;

import React from "react";
import Nav from "../../components/Nav/Nav.js";
import About from "../../components/About/About.js";
import Menu from "../../components/Menu/Menu.js";
import Contact from "../../components/Contact/Contact.js";
import Footer from "../../components/Footer/Footer.js";

const HomePage = () => {
  return (
    <div className="container">
      HOME PAGE ROUTE
      <Nav />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
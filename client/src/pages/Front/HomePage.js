import React from "react";
import Nav from "../../components/Front/Nav.js";
import About from "../../components/Front/About.js";
import Menu from "../../components/Front/Menu.js";
import Contact from "../../components/Front/Contact.js";
import Footer from "../../components/Front/Footer.js";

const HomePage = () => {
  return (
    <div className="container" style={{ backgroundColor: '#f2f4f3' }}>
      <Nav />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
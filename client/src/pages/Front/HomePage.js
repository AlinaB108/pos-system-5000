import React from "react";
import { useRef, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import Nav from "../../components/Front/Nav.js";
import About from "../../components/Front/About.js";
import Menu from "../../components/Front/Menu.js";
import Contact from "../../components/Front/Contact.js";
import Footer from "../../components/Front/Footer.js";

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Scroll() {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
          },
        });
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return <div ref={main}></div>;
}

const HomePage = () => {
  return (
    <div className="container" style={{ backgroundColor: '#f2f4f3' }}>
      <Nav />
      <About />
      <Menu />
      <Contact />
      <Footer />
      <Scroll />
    </div>
  );
};

export default HomePage;
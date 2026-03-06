import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./App.css";

import Header from "../src/components/header/Header.jsx";
import Home from "../src/components/home/Home.jsx";
import About from "../src/components/about/About.jsx";
import Skills from "../src/components/skills/Skills.jsx";
import Projects from "../src/components/projects/Projects.jsx";
import Contact from "../src/components/contact/Contact.jsx";
import Footer from "../src/components/footer/Footer.jsx";

function App() {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

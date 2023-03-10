import React from "react";

import Navbar from "../Navbar";
import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home;
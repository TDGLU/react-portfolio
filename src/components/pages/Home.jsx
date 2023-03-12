import React from "react";

import Navbar from "../Navbar";
import Hero from "../Hero";
import Contact from "../Contact";
import Projects from "./Projects";

const Home = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home;
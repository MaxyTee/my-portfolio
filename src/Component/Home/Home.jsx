import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";

import "../../App.css";
import Work from "./Work";
import Skill from "./Skills";
import About from "./About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skill />

      {/* <About /> */}
    </>
  );
};

export default Home;

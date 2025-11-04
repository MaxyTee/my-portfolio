import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import { useState } from "react";
import "../../App.css";
import Work from "./Work";
import Skill from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import FadeInSection from "../Cards/FadeInSection";

const Home = () => {
  const [dark, setDark] = useState(true);

  const handleMode = () => {
    setDark((prev) => !prev);
    console.log(dark);
  };
  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white"}`}>
      <Navbar handleMode={handleMode} dark={dark} />
      <Hero dark={dark} />
      <FadeInSection>
        <Skill dark={dark} />
      </FadeInSection>
      <FadeInSection>
        <About dark={dark} />
      </FadeInSection>
      <FadeInSection>
        <Work dark={dark} />
      </FadeInSection>
      <FadeInSection>
        <Contact dark={dark} />
      </FadeInSection>
      <FadeInSection>
        <Footer dark={dark} />
      </FadeInSection>
      {/* <About /> */}
    </div>
  );
};

export default Home;

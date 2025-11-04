import React from "react";
import aboutImg from "../../../public/maxyHero.png";

const About = () => {
  return (
    <div className="p-4 max-w-[80%] mt-7 mx-auto flex items-center justify-center gap-10">
      <img src={aboutImg} className="w-[30%]" alt="" />

      <div className="">
        <h5>About Me</h5>
        <h2 className="font-sans text-gray-200">I always Make The Best</h2>
        <p>
          I’m a passionate Frontend Developer who loves turning ideas into
          beautiful, functional, and user-friendly web experiences. I enjoy
          working with modern technologies like HTML, CSS, JavaScript, React,
          and Tailwind CSS to build responsive and accessible interfaces. I’m
          always eager to learn, grow, and create projects that solve real
          problems while delivering great user experiences.
        </p>
        <button>
          <a href="contact.html">Contact Us</a>
        </button>
      </div>
    </div>
  );
};

export default About;

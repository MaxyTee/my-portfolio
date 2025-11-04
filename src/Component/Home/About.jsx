import React from "react";
import img from "../../../public/maxyHero.png";

const About = ({ dark }) => {
  return (
    <section
      className={`flex flex-col sm:flex-row px-10 py-18 sm:px-18 sm:py-24 gap-6 items-center justify-between ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="flex-1">
        <img
          src={img}
          className={`sm:w-[70%]  object-fill rounded-md border-2 ${
            dark ? "border-neutral-300" : "border-neutral-900"
          } overflow-hidden`}
          alt="User Image"
        />
      </div>
      <div
        className={`flex-1 rounded-md shadow-lg  ${
          dark ? "bg-neutral-900" : "bg-neutral-300 shadow-neutral-300"
        } w-full sm:order-none -order-1 sm:w-[40%] p-4`}
      >
        <h5 className="uppercase mb-2 leading-tight  text-amber-600/80 font-bold">
          About Me
        </h5>
        <h2 className="text-amber-700 font-space sm:text-3xl mb-2 text-xl font-extrabold lg:text-5xl ">
          More Than 4+ Years Programming Experienced
        </h2>
        <p
          className={`font-inter text-justify ${
            dark ? "text-natural-100" : "text-neutral-900"
          } text-sm`}
        >
          I’m a passionate Frontend Developer who loves turning ideas into
          beautiful, functional, and user-friendly web experiences. I enjoy
          working with modern technologies like HTML, CSS, JavaScript, React,
          and Tailwind CSS to build responsive and accessible interfaces. I’m
          always eager to learn, grow, and create projects that solve real
          problems while delivering great user experiences.
        </p>
        <button className="mt-8 px-4 py-2 rounded-full bg-linear-to-b from-black  to-amber-600 hover:bg-transparent hover:inset-1 hover:border-b duration-200 delay-150 transition-all hover:inset-ring-current">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default About;

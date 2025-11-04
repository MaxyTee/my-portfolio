import React from "react";

const Footer = ({ dark }) => {
  return (
    <section
      className={` ${
        dark
          ? "bg-neutral-950 shadow-black"
          : "bg-neutral-300 shadow-neutral-400"
      } p-3 text-center`}
    >
      <h1 className="font-poppins text-2xl md:text-4xl lg:text-5xl">Footer</h1>
    </section>
  );
};

export default Footer;

import React from "react";
import logo from "../../../public/maxy.png";
import SocialIcon from "../Cards/SocialIcon";
import { Link } from "react-router-dom";

const Footer = ({ dark }) => {
  return (
    <section
      className={` ${
        dark
          ? "bg-neutral-950 shadow-black"
          : "bg-neutral-300 shadow-neutral-400"
      } p-3 text-center`}
    >
      <div className="flex sm:flex-row flex-col sm:items-center items-start gap-6 justify-around">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            className="h-8 w-8 rounded-full border-2 border-white"
            alt=""
          />
          <span className="font-bold">MAXY</span>
        </div>

        <div>
          <small>copyright2025@maxy</small>
        </div>

        <div>
          <SocialIcon />
        </div>
      </div>
    </section>
  );
};

export default Footer;

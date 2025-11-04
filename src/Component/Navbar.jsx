import {
  RiFacebookBoxFill,
  RiGoogleFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
import logo from "../../public/maxy.png";
import SocialIcon from "./Cards/SocialIcon";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
        console.log("Done", window.scrollY);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` ${
        show
          ? "sticky top-0 z-50 bg-black opacity-100 shadow-lg "
          : "bg-black  pointer-events-none"
      } transition-all duration-500 p-4 w-[100%] text-white flex fitems-center justify-between`}
    >
      <div className="flex items-center gap-4">
        <img
          src={logo}
          className="h-8 w-8 rounded-full border-2 border-white"
          alt=""
        />
        <span className="font-bold">MAXY</span>
      </div>
      <div className="">
        <ul className="flex gap-4 list-none">
          <li className="cursor-pointer px-2 py-1 hover:text-amber-600 duration-300 delay-150 transition-colors">
            Home
          </li>
          <li className="cursor-pointer px-2 py-1 hover:text-amber-600 duration-300 delay-150 transition-colors">
            About
          </li>
          <li className="cursor-pointer px-2 py-1 hover:text-amber-600 duration-300 delay-150 transition-colors">
            Contact
          </li>
          <li className="cursor-pointer px-2 py-1 hover:text-amber-600 duration-300 delay-150 transition-colors">
            Potfolio
          </li>
        </ul>
      </div>
      <div className="sm:block hidden">
        {/* <ul className="flex gap-4 list-nones"> */}
        <SocialIcon />
      </div>
    </nav>
  );
};

export default Navbar;

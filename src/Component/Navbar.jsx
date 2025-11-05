import {
  RiCloseFill,
  RiMenu3Fill,
  RiMoonFill,
  RiSunFill,
} from "react-icons/ri";
import logo from "../../public/maxy.png";
import SocialIcon from "./Cards/SocialIcon";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ handleMode, dark }) => {
  const [close, setClose] = useState(true);
  const handleClose = () => {
    console.log("Closed");
    setClose((prev) => !prev);
  };
  return (
    <nav
      className={`sm:sticky top-0 z-60 relative shadow-lg ${
        dark ? "bg-neutral-500/10 text-amber-950" : "bg-black text-amber-50"
      } absolute top-0 transition-all duration-500  p-0 w-[100%]`}
    >
      <div
        className={`flex sm:items-center sm:justify-between justify-baseline sm:flex-row flex-col sm:h-auto  ${
          dark ? "bg-black text-white" : "bg-white text-black"
        } sm:w-[100%] w-[50%] ${
          close ? "w-[100%] " : "h-screen"
        } duration-300 delay-150 transition-all absolute p-4`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              className="h-8 w-8 rounded-full border-2 border-white"
              alt=""
            />
            <span className="font-bold">MAXY</span>
          </div>
          <div className="sm:hidden flex gap-4">
            <button onClick={handleClose}>
              {close ? <RiMenu3Fill /> : <RiCloseFill />}
            </button>
            <button onClick={handleMode} className="cursor-pointer ">
              {dark ? (
                <RiSunFill className="hover:fill-amber-600" />
              ) : (
                <RiMoonFill className="hover:fill-amber-600" />
              )}
            </button>
          </div>
        </div>
        <div className={`${close ? "sm:block hidden" : "opacity-100"} `}>
          <ul className="flex sm:my-0 my-7 flex-col sm:flex-row gap-4 list-none">
            <li className="cursor-pointer px-2 py-1 hover:text-amber-600 duration-300 delay-150 transition-colors">
              <Link to="/my-portfolio/">Home</Link>
            </li>
            <li className="cursor-pointer px-2 py-1 hover:text-amber-600 duration-300 delay-150 transition-colors">
              <Link to="/my-portfolio/about">About</Link>
            </li>
            <li className="cursor-pointer px-2 py-1 hover:text-amber-600 duration-300 delay-150 transition-colors">
              <Link to="/">Contact</Link>
            </li>
            <li className="cursor-pointer px-2 py-1 hover:text-amber-600 duration-300 delay-150 transition-colors">
              <Link to="/">Portfolio</Link>
            </li>
          </ul>
        </div>
        <div className="md:block hidden ">
          <SocialIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

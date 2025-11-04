import { RiMoonClearFill, RiMoonFill, RiSunFill } from "react-icons/ri";
import logo from "../../public/maxy.png";
import SocialIcon from "./Cards/SocialIcon";
import { Link } from "react-router-dom";

const Navbar = ({ handleMode, dark }) => {
  return (
    <nav
      className={`sticky top-0 z-50 opacity-100 shadow-lg ${
        dark ? "bg-black text-amber-50" : "bg-neutral-50 text-amber-950"
      } transition-all duration-500 p-4 w-[100%] flex fitems-center justify-between`}
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
      <div className="sm:block hidden ">
        <SocialIcon />
      </div>

      <button onClick={handleMode} className="cursor-pointer ">
        {dark ? (
          <RiSunFill className="hover:fill-amber-600" />
        ) : (
          <RiMoonFill className="hover:fill-amber-600" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;

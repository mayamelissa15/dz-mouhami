import React from "react";
import Logo from "../assets/logo.svg";
import info from "../assets/info.svg";
import contact from "../assets/email.svg";
import Profil from "../assets/profile.svg";
import Search from "../assets/search.svg";
import "../style/styles.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=" font-normal px-24 py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={Logo}
          alt="Mouhami-dz"
          className="text-white text-lg font-bold"
        ></img>

        {/* Navigation Links */}
        <div className="space-x-4 flex justify-between gap-12 text-sm font-medium">
          <a
            href="#"
            className="nav-Links  flex items-center gap-1 text-[#26495D]"
          >
            <img src={info}></img>
            About
          </a>
          <a
            href="#"
            className="nav-Links  flex items-center gap-1 text-[#26495D]"
          >
            <img src={contact}></img>
            Contact
          </a>
          <Link
            to="/search"
            className=" nav-Links flex items-center gap-1 text-[#26495D]"
          >
            <img src={Search}></img>
            Search
          </Link>
          <a
            href="#"
            className="nav-Links flex items-center gap-1 text-[#26495D]"
          >
            <img src={Profil}></img>
            Profil
          </a>
        </div>

        {/* Get Started Button */}
        <button className="transition-transform transform hover:scale-105 duration-500  bg-[#094E771A] font-medium text-[#094B72E5] rounded-full px-6 py-2 hover:bg-blue-100 hover:duration-500 hover:shadow-md focus:outline-none text-sm">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
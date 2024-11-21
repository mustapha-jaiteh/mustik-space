import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import hamburger from "../assets/shared/icon-hamburger.svg";
import iconclose from "../assets/shared/icon-close.svg";
import logo from "../assets/shared/logo.svg";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const activeStyle = {
    fontweight: "bold",
    color: "white",

    textDecoration: "underline",
  };
  return (
    <>
      <nav>
        <div className="nav-logo ml-4 lg:ml-4">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-bar bg-slate-800 w-full lg:w-[55%]  ml-[20%] lg:ml-[45%] h-full lg:h-[85px]  p-2 pl-8 bg-opacity-70 text-gray-50">
          <ul className="hidden md:flex flex-row justify-between items-center">
            <li className=" hover:underline underline-offset-8">
              <NavLink
                to={"/"}
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                00 HOME
              </NavLink>
            </li>
            <li className="hover:underline underline-offset-8">
              <NavLink
                to={"/destinations/1"}
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                01 DESTINATIONS
              </NavLink>
            </li>
            <li className="hover:underline underline-offset-8">
              <NavLink
                to={"/crew/1"}
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                02 CREW
              </NavLink>
            </li>
            <li className="hover:underline underline-offset-8">
              <NavLink
                to={"/technologies/1"}
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                03 TECHNOLOGIES
              </NavLink>
            </li>
          </ul>

          {/* mobile nav */}

          <div className="md:hidden lg:hidden ">
            <button onClick={toggleNav} className="text-white text-3xl m-auto">
              {navVisible ? (
                <img src={iconclose} alt="close" />
              ) : (
                <img src={hamburger} alt="hamburger" />
              )}
            </button>
          </div>
          {navVisible && (
            <div>
              <ul className="md:hidden lg:hidden  text-gray-100 font-medium grid-col-1  mt-4">
                <li className=" hover:underline underline-offset-8 mt-6">
                  <NavLink
                    to={"/"}
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    00 HOME
                  </NavLink>
                </li>
                <li className="hover:underline underline-offset-8 mt-4">
                  <NavLink
                    to={"/destinations/1"}
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    01 DESTINATIONS
                  </NavLink>
                </li>
                <li className="hover:underline underline-offset-8 mt-4">
                  <NavLink
                    to={"/crew/1"}
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    02 CREW
                  </NavLink>
                </li>
                <li className="hover:underline underline-offset-8 mt-4">
                  <NavLink
                    to={"/technologies/1"}
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    03 TECHNOLOGIES
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

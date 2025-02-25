import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";
import LogoScene from "./LogoScene";
import { FaSearch } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="bg-white/30 backdrop-blur-md shadow-lg fixed w-full z-50">
        <div className="">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="logo-section md:w-1/6 w-1/2 flex justify-center items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-[#f38405]">Spice6</h1>
                {/* <LogoScene /> */}
              </Link>
            </div>

            <div className="hidden w-5/6 md:flex justify-evenly items-center">
              {/* Navigation Links */}
              <div className="nav-section w-4/6 flex justify-center items-center space-x-14 text-3xl glass-effect px-6 py-2">
                <li className="group">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive ? " text-orange-600" : "text-gray-900"
                      } text-gray-900 hover:text-orange-600 transition-all duration-500 px-3 py-2 rounded-md text-sm font-medium`
                    }
                  >
                    Home
                    <div className="mx-auto bg-orange-600 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                  </NavLink>
                </li>
                <li className="group">
                  <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                      `${
                        isActive ? " text-orange-600" : "text-gray-900"
                      } text-gray-900 hover:text-orange-600 transition-all duration-500 px-3 py-2 rounded-md text-sm font-medium`
                    }
                  >
                    Menu
                    <div className="mx-auto bg-orange-600 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                  </NavLink>
                </li>
                <li className="group">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `${
                        isActive ? " text-orange-600" : "text-gray-900"
                      } text-gray-900 hover:text-orange-600 transition-all duration-500 px-3 py-2 rounded-md text-sm font-medium`
                    }
                  >
                    About
                    <div className="mx-auto bg-orange-600 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                  </NavLink>
                </li>
                <li className="group">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `${
                        isActive ? " text-orange-600" : "text-gray-900"
                      } text-gray-900 hover:text-orange-600 transition-all duration-500 px-3 py-2 rounded-md text-sm font-medium`
                    }
                  >
                    Contact
                    <div className="mx-auto bg-orange-600 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                  </NavLink>
                </li>
                <li className="group">
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      `${
                        isActive ? " text-orange-600" : "text-gray-900"
                      } text-gray-900 hover:text-orange-600 transition-all duration-500 px-3 py-2 rounded-md text-sm font-medium`
                    }
                  >
                    Gallery
                    <div className="mx-auto bg-orange-600 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                  </NavLink>
                </li>
              </div>
              {/* Book Now  */}
              <div className="booking-section flex w-1/6">
                <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors duration-200">
                今すぐ予約
                </button>
                {/* <div className="relative ml-2">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="pl-8 pr-4 py-2 rounded-md text-sm bg-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                  <FaSearch className="absolute left-2 top-2.5 h-4 w-4" />
                </div> */}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden w-1/2 flex justify-center items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={handleMobileMenuClick}
                >
                  Home
                </Link>
                <Link
                  to="/menu"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={handleMobileMenuClick}
                >
                  Menu
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={handleMobileMenuClick}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={handleMobileMenuClick}
                >
                  Contact
                </Link>
                <Link
                  to="/gallery"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={handleMobileMenuClick}
                >
                  Gallery
                </Link>
                <button
                  className="w-full text-left bg-orange-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-orange-700"
                  onClick={handleMobileMenuClick}
                >
                  Order Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

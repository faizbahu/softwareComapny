import React, { useState } from "react";
import { MenuIcon, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Asset 8@4x.png"; // Assuming you have a logo image

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const location = useLocation(); // Get the current route

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="relative w-full border-b border-gray-700">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[#1F1E28] opacity-60 z-0"></div>

      <div className="relative container mx-auto flex justify-between items-center py-4 px-6 text-white z-10">
        {/* Logo */}
        <div className="flex items-center">
          {/* <div className="flex items-center justify-center bg-white rounded-full h-6 w-6 mr-2">
            <div className="bg-gray-900 rounded-full h-4 w-4 flex items-center justify-center">
              <span className="text-white text-xs">●</span>
            </div>
          </div> */}
          <img className="w-[57px]" src={Logo} alt="" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link
              to="/"
              className={`text-sm hover:text-blue-400 ${isActive("/") ? "text-blue-500" : "text-gray-300"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm hover:text-blue-400 ${isActive("/about") ? "text-blue-500" : "text-gray-300"}`}
            >
              About
            </Link>

            {/* Pages Dropdown */}
            <div className="relative group z-[10]">
              <button className="flex items-center text-gray-300 text-sm hover:text-white">
                Pages <ChevronDown size={16} className="ml-1" />
              </button>

              <div className="absolute left-0 mt-2 bg-gray-800 shadow-lg rounded-md w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-in-out">
                <Link
                  to="/service"
                  className={`block px-4 py-2 text-sm hover:bg-gray-700 ${isActive("/service") ? "text-blue-500" : "text-gray-300"}`}
                >
                  Services
                </Link>
                <Link
                  to="/portfolio"
                  className={`block px-4 py-2 text-sm hover:bg-gray-700 ${isActive("/portfolio") ? "text-blue-500" : "text-gray-300"}`}
                >
                  Portfolio
                </Link>
                <Link
                  to="/careerPage"
                  className={`block px-4 py-2 text-sm hover:bg-gray-700 ${isActive("/testimonials") ? "text-blue-500" : "text-gray-300"}`}
                >
                  Careers
                </Link>
                <Link
                  to="/jobDetails"
                  className={`block px-4 py-2 text-sm hover:bg-gray-700 ${isActive("/testimonials") ? "text-blue-500" : "text-gray-300"}`}
                >
                  Job Details
                </Link>
              </div>
            </div>

            <Link
              to="/blog"
              className={`text-sm hover:text-blue-400 ${isActive("/blog") ? "text-blue-500" : "text-gray-300"}`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`text-sm hover:text-blue-400 ${isActive("/contact") ? "text-blue-500" : "text-gray-300"}`}
            >
              Contact
            </Link>
          </div>

          <button className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 px-6 relative z-10">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-sm hover:text-blue-400 ${isActive("/") ? "text-blue-500" : "text-gray-300"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm hover:text-blue-400 ${isActive("/about") ? "text-blue-500" : "text-gray-300"}`}
            >
              About
            </Link>

            {/* Mobile Pages Dropdown */}
            <div>
              <button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="flex justify-between text-gray-300 text-sm w-full hover:text-white"
              >
                Pages <ChevronDown size={16} />
              </button>
              {isPagesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/service"
                    className={`block text-sm hover:text-white ${isActive("/service") ? "text-blue-500" : "text-gray-300"}`}
                  >
                    Services
                  </Link>
                  <Link
                    to="/portfolio"
                    className={`block text-sm hover:text-white ${isActive("/portfolio") ? "text-blue-500" : "text-gray-300"}`}
                  >
                    Portfolio
                  </Link>
                  <Link
                  to="/careerPage"
                  className={`block text-sm hover:bg-gray-700 ${isActive("/testimonials") ? "text-blue-500" : "text-gray-300"}`}
                >
                  Careers
                </Link>
                <Link
                  to="/jobDetails"
                  className={`block  text-sm hover:bg-gray-700 ${isActive("/testimonials") ? "text-blue-500" : "text-gray-300"}`}
                >
                  Job Details
                </Link>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`text-sm hover:text-blue-400 ${isActive("/blog") ? "text-blue-500" : "text-gray-300"}`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`text-sm hover:text-blue-400 ${isActive("/contact") ? "text-blue-500" : "text-gray-300"}`}
            >
              Contact
            </Link>

            <button className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium w-full mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

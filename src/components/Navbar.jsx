import React, { useState } from "react";
import { MenuIcon, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  return (
    <nav className="relative w-full border-b border-gray-700">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[#1F1E28] opacity-60 z-0"></div>

      <div className="relative container mx-auto flex justify-between items-center py-4 px-6 text-white z-10">
        <div className="flex items-center">
          <div className="flex items-center justify-center bg-white rounded-full h-6 w-6 mr-2">
            <div className="bg-gray-900 rounded-full h-4 w-4 flex items-center justify-center">
              <span className="text-white text-xs">●</span>
            </div>
          </div>
          <span className="font-medium">LOGO Here</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link to="/" className="text-blue-500 text-sm hover:text-blue-400">
              Home
            </Link>
            <a href="#" className="text-gray-300 text-sm hover:text-white">
              About
            </a>

            {/* Pages Dropdown - Hover Fixed */}
            <div className="relative group z-[10]">
              <button
                className="flex items-center text-gray-300 text-sm hover:text-white"
              >
                Pages <ChevronDown size={16} className="ml-1" />
              </button>

              {/* Dropdown Menu */}
              <div
                className="absolute left-0 mt-2 bg-gray-800 shadow-lg rounded-md w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-in-out"
              >
                <Link
                  to="/service"
                  className="block px-4 py-2 text-gray-300 text-sm hover:bg-gray-700"
                >
                  Services
                </Link>
                <Link
                  to="/portfolio"
                  className="block px-4 py-2 text-gray-300 text-sm hover:bg-gray-700"
                >
                  Portfolio
                </Link>
                <Link
                  to="/testimonials"
                  className="block px-4 py-2 text-gray-300 text-sm hover:bg-gray-700"
                >
                  Testimonials
                </Link>
              </div>
            </div>

            <Link to="/blog" className="text-gray-300 text-sm hover:text-white">
              Blog
            </Link>
            <a href="#" className="text-gray-300 text-sm hover:text-white">
              Contact
            </a>
          </div>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 px-6 relative z-10">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-blue-500 text-sm hover:text-blue-400">
              Home
            </Link>
            <a href="#" className="text-gray-300 text-sm hover:text-white">
              About
            </a>

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
                    to="/services"
                    className="block text-gray-300 text-sm hover:text-white"
                  >
                    Services
                  </Link>
                  <Link
                    to="/portfolio"
                    className="block text-gray-300 text-sm hover:text-white"
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/testimonials"
                    className="block text-gray-300 text-sm hover:text-white"
                  >
                    Testimonials
                  </Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-gray-300 text-sm hover:text-white">
              Blog
            </Link>
            <a href="#" className="text-gray-300 text-sm hover:text-white">
              Contact
            </a>
            <button className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium w-full mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

import React, { useState } from 'react'
import { MenuIcon, X } from 'lucide-react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <a href="#" className="text-blue-500 text-sm hover:text-blue-400">
              Home
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white">
              Pages ▾
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white">
              Blog
            </a>
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
            <a href="#" className="text-blue-500 text-sm hover:text-blue-400">
              Home
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white">
              Pages ▾
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white">
              Blog
            </a>
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
  )
}

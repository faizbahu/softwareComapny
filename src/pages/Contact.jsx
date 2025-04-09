import React from "react";
import { Navbar } from "../components/Navbar";
import BlogImage from "../assets/blog.png";
import { PlayCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import customer from "../assets/customer.png"
import LongSection from "../assets/longSection.png";

export default function Contact() {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Background image with overlay */}
        
        <Navbar />
        {/* Content container */}
       
      </div>
      <h2 className="text-center text-white text-4xl font-bold mt-24">Have Any Questions? <br />
      Get In Touch!</h2>
      <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Email Card */}
        <div className="bg-[#2c2e32] rounded-3xl p-8 flex flex-col items-center text-center">
          <div className="w-12 h-12 flex items-center justify-center mb-6">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-white text-2xl font-semibold mb-6">Connect With Email</h3>
          <div className="text-gray-300 space-y-2">
            <p>contact@webliweb.com</p>
            <p>support@aizflex.com</p>
          </div>
        </div>

        {/* Phone Card */}
        <div className="bg-[#2c2e32] rounded-3xl p-8 flex flex-col items-center text-center">
          <div className="w-12 h-12 flex items-center justify-center mb-6">
            <Phone className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-white text-2xl font-semibold mb-6">For More Information</h3>
          <div className="text-gray-300 space-y-2">
            <p>+00 123 456 78953</p>
            <p>+00 123 456 78954</p>
          </div>
        </div>

        {/* Address Card */}
        <div className="bg-[#2c2e32] rounded-3xl p-8 flex flex-col items-center text-center">
          <div className="w-12 h-12 flex items-center justify-center mb-6">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-white text-2xl font-semibold mb-6">Office Address</h3>
          <div className="text-gray-300 space-y-2">
            <p>10529 Oakville Rd Gladstone,</p>
            <p>Virginia(VA),</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column - Contact Info */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="inline-block">
            <div className="bg-[#2c2e32] text-white px-6 py-3 rounded-full">Contact Us</div>
          </div>
        <h1 className="text-white text-4xl font-bold">Get In Touch For <br />
        Any Information</h1>
          <p className="text-gray-400 max-w-md">
            Excepteur sint occaecat cupidatat officia non proident sunt in culpa qui deserunt.
          </p>
        <div className="flex items-start">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="bg-[#2c2e32] text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-[#2c2e32] text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-[#2c2e32] text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-[#2c2e32] text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          {/* Customer Support Illustration */}
          <div className="relative">
            <img
              src={customer}
              alt="Customer support representative"
              className="max-w-full"
            />
          </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#2c2e32] text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#2c2e32] text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#2c2e32] text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Write A Message...."
              rows={6}
              className="w-full bg-[#2c2e32] text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4a84ff] hover:bg-blue-600 text-black font-medium py-4 px-6 rounded-lg transition-colors"
          >
            Send Your Request
          </button>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="mt-12 border-t border-gray-200"></div>
    </div>
    <div className="lg:pb-24 py-12 lg:py-0">
                <img src={LongSection} alt="" />
              </div>
      </>
  );
}

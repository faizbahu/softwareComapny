import React from 'react'
import PortfolioImg from "../assets/project.png";
import { Navbar } from '../components/Navbar';
import { PlayCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {projects} from "../utils/data";
import {reasons} from "../utils/data";
import {processes} from "../utils/data";
import Earth from "../assets/earth.png";
import orbital from "../assets/orbital.png"
import container from "../assets/Container.png"
export default function Portfolio() {
  return (
    <>
    <div className="w-full min-h-screen bg-gray-900 relative overflow-hidden">
  {/* Background image */}
  <div 
    className="absolute inset-0 h-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${PortfolioImg})` }}
  ></div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#1C1D20] to-[#111112] opacity-90"></div>

  {/* Navbar */}
  <Navbar />

  {/* Content */}
  <div className="container mx-auto py-20 md:py-32 relative z-0 px-[38px] lg:px-0 flex flex-col h-[100vh] justify-center">
    <div className="max-w-2xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
      Project Page
      </h1>
      <ul className="flex items-center gap-2 mt-4">
        <li>
          <Link to="/" className="hover:text-gray-300 text-[16px] font-bold">
            Home
          </Link>
        </li>
        <span className="text-gray-400">•</span>
        <li className="text-gray-300 text-[16px] font-bold">Project Page</li>
      </ul>
    </div>
    <div className="mt-12 flex items-center w-full justify-end">
      <div className="relative">
        <div className="h-12 w-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all">
          <PlayCircleIcon className="h-10 w-10 text-blue-500" />
        </div>
      </div>
      <div className="ml-4">
        <p className="text-white font-medium">Watch Intro Video</p>
        <p className="text-gray-400 text-sm">99 seconds</p>
      </div>
    </div>
  </div>
</div>
<div className="bg-[#1C1D20] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="flex justify-center ">
          <div className="bg-[#333437] text-[#4A84FF] text-sm py-2 px-6 rounded-full inline-block">Our Project</div>
          
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center my-12">
              Visit Our Recent
              <br />
              Clients Project.
            </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link to="/projectDetails">
            <div key={project.id} className="rounded-xl overflow-hidden shadow-sm h-full">
              {/* Project Image */}
              <div className={`${project.bgColor} h-64 relative`}>
                <img
                  src={project.image }
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="bg-[#2c2e32] p-6">
                {/* Orbital Logo */}
                <div className="flex items-center mb-4">
                  
                  <img src={orbital} alt="" />
                </div>

                {/* Project Name */}
                <h3 className="text-white text-xl font-semibold mb-3">{project.name}</h3>

                {/* Description */}
                <p className="text-[#b8b8b8] text-sm mb-6">{project.description}</p>

                {/* Client and Budget */}
                <div className="grid grid-cols-2 gap-4 border-t border-[#505156] pt-4">
                  <div>
                    <p className="text-[#757678] text-xs mb-1">Client Name:</p>
                    <p className="text-white text-sm">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-[#757678] text-xs mb-1">Budget:</p>
                    <p className="text-white text-sm">{project.budget}</p>
                  </div>
                </div>
              </div>

            </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-[100px]'><img src={container} alt="" /></div>
      
    </div>

    <div className="bg-[#111112] text-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 max-w-4xl mx-auto leading-tight">
          Here Are Some Reasons
          <br />
          Why You Will Love Us
        </h2>

        {/* Reasons Card */}
        <div className="bg-[#2c2e32]  p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-[#414141]">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8"
              >
                {/* Icon */}
                <div className="mb-6">{reason.icon}</div>

                {/* Number */}
                <div className="text-[#757678] text-sm mb-4">{reason.id}</div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-8">{reason.title}</h3>

                {/* Divider */}
                <div className="w-full h-px bg-[#414141] mb-8"></div>

                {/* Link */}
                <a href="#" className="text-sm tracking-wider hover:text-[#4a84ff] transition-colors">
                  WORK WITH US
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="bg-white text-[#111112] text-sm font-medium py-2 px-6 rounded-full">TRUST</div>
          <p className="text-white text-sm md:text-base text-center md:text-left">
            Join the 850+ company trusting our creative Portfolio Agency Services
          </p>
        </div>
      </div>
    </div>


    <div className="bg-[#1B1CF] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-xl mb-10 md:mb-0">
            Work Process That
            <br />
            Focuses On Results And
            <br />
            Relationships
          </h2>

          {/* 3D Sphere */}
          <div className="w-32 h-32 md:w-40 md:h-40">
            <img
              src={Earth}
              alt="3D metallic sphere"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Process Card */}
        <div className="bg-[#111112] text-white rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-[#333437]">
            {processes.map((process, index) => (
              <div key={index} className="px-0 md:px-8">
                {/* Number */}
                <div className="text-[#757678] text-sm mb-6">{process.id}</div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-6">{process.title}</h3>

                {/* Description */}
                <p className="text-[#b8b8b8] text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
</>
  
  )
}

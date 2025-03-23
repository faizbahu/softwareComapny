import React from 'react'
import PortfolioImg from "../assets/project.png";
import { Navbar } from '../components/Navbar';
import { PlayCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import figure from "../assets/figure.png";
import { steps } from "../utils/data";
import touch from "../assets/touch.png";
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
  <div className="container mx-auto py-20 md:py-32 relative z-[0] px-[38px] lg:px-0 flex flex-col h-[100vh] justify-center">
    <div className="max-w-2xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
      Project Details
      </h1>
      <ul className="flex items-center gap-2 mt-4">
        <li>
          <Link to="/" className="hover:text-gray-300 text-[16px] font-bold">
            Home
          </Link>
        </li>
        <span className="text-gray-400">•</span>
        <li className="text-gray-300 text-[16px] font-bold">Project Details</li>
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


<div className="bg-black text-white min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <h5 className="text-sm font-medium text-gray-400 mb-1">
            Digital Marketing
          </h5>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">CloudBridge</h1>
          <p className="text-gray-400 max-w-2xl">
            Cloud platform enables the quick exchange of information between
            systems and businesses. Our team was tasked with creating a website
            for CloudBridge that would showcase their services. The client
            wanted a clean design that would make it easy for potential clients
            to find the information they needed.
          </p>
        </header>
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left content - Image and text */}
          <div className="">
            {/* 3D Visualization */}
            {/* <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg mb-8 h-80 sm:h-96 relative overflow-hidden">
              <img
                src={figure}
                alt="3D visualization of a businessman on a platform"
                className="w-full h-full object-cover"
              />
            </div> */}
            <div className="relative mb-12">
          {/* Purple Background with 3D Character */}
          <div className="rounded-xl overflow-hidden">
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-[#9370db]">
              <img
                src={figure}
                alt="3D businessman with growth arrows"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Details Card */}
          <div className="w-[230px] bg-[#2c2e32] text-white p-8 rounded-xl max-w-xl absolute right-8 bottom-0 translate-y-1/3 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-1">Project Name:</h3>
                <p className="text-[#b8b8b8]">CloudBridge</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Client:</h3>
                <p className="text-[#b8b8b8]">Webliweb LLC</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Duration:</h3>
                <p className="text-[#b8b8b8]">12 Month</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Cost:</h3>
                <p className="text-[#b8b8b8]">375 USD Only</p>
              </div>
            </div>
          </div>
        </div>
            {/* Project Challenge History */}
            <div className="mb-8 lg:w-2/3">
              <h2 className="text-xl font-bold mb-4">
                Project Challenge/History
              </h2>
              <p className="text-gray-400 mb-4">
                CloudBridge had discovered documentation regarding the history
                of CloudBridge. Nobody seemed to know what the organization was
                about or what it offered to businesses.
              </p>
              <p className="text-gray-400 mb-4">
                The CloudBridge team needed to find out what was happening with
                their business. They conducted interviews with clients, analyzed
                the online presence of competitors, created personas, and made
                content inventories.
              </p>
            </div>
            {/* Additional sections */}
            <div className="mb-8 lg:w-2/3">
              <h3 className="text-lg font-bold mb-2">Brand Visual Identity</h3>
              <p className="text-gray-400 mb-4">
                The brand needed a new visual identity for its marketing
                campaigns. We worked with internal stakeholders to establish a
                color palette, typography, and design elements.
              </p>
            </div>
            <div className="mb-8 lg:w-2/3">
              <h3 className="text-lg font-bold mb-2">Implemented Solution</h3>
              <p className="text-gray-400 mb-4">
                We helped the CloudBridge team to design a website that would
                highlight their services in a way that was easy to understand.
                This included developing a clear information architecture and
                strategy for all development efforts.
              </p>
            </div>
          </div>
          {/* Right sidebar - Project details */}
          {/* <div className="lg:w-1/3">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="font-bold mb-6">Project Name:</h3>
              <h3 className="font-bold mb-2">Client:</h3>
              <p className="text-gray-400 mb-6">CloudBridge</p>
              <h3 className="font-bold mb-2">Duration:</h3>
              <p className="text-gray-400 mb-6">6 months</p>
              <h3 className="font-bold mb-2">Cost:</h3>
              <p className="text-gray-400">$$$</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>


    <div className="bg-[#111112] text-white py-16 md:py-24 px-4 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">How We Drive Your Success</h2>
          <p className="text-[#b8b8b8] text-lg max-w-3xl mx-auto">
            Our strategic process focuses on results, optimizing every step to accelerate your brand's growth and
            success
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Timeline */}
          <div className="relative">
            <div className="top-[87px] max-h-[370px] absolute left-4 top-6 bottom-6 w-0.5 bg-[#4a84ff] hidden md:block"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-col items-center mr-6">
                    <div className="w-8 h-8 mt-[66px] rounded-full bg-[#4a84ff] flex items-center justify-center"></div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-[#2c2e32] rounded-xl p-6 md:p-8 flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-[#b8b8b8]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden order-first lg:order-last mb-8 lg:mb-0">
            <img
              src={touch}
              alt="Person drawing upward trending graph"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
</>
  
  )
}
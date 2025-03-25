import React, {useState} from "react";
import service from "../assets/service.png";
import { PlusIcon } from 'lucide-react'
import { Navbar } from "../components/Navbar";
import { PlayCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesPage } from "../utils/data";
import { ArrowRight } from "lucide-react";
import { stepsDetails } from "../utils/data";
import { Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Orange from "../assets/orange.png";
import direction from "../assets/direction.png";
import direction1 from "../assets/direction1.png";
import { accordionItems } from "../utils/data";
import { statsPage } from "../utils/data";
export default function Service() {
    const [activeAccordion, setActiveAccordion] = useState(null)
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }
  return (
    <>
      <div className="w-full min-h-screen bg-[#1C1D20] relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${service})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1D20] to-[#111112] opacity-90"></div>

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="container mx-auto py-20 md:py-32 relative z-[0] px-[38px] lg:px-0 flex flex-col h-[100vh] justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Service Page
            </h1>
            <ul className="flex items-center gap-2 mt-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300 text-[16px] font-bold"
                >
                  Home
                </Link>
              </li>
              <span className="text-gray-400">•</span>
              <li className="text-gray-300 text-[16px] font-bold">
                Service Page
              </li>
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
      <div className="bg-[#111112]">
        <div className="max-w-7xl  mx-auto relative z-10 py-24 px-12 lg:px-0">
          {/* Section Label */}
          <div className="flex justify-center mb-4">
            <div className="bg-[#333437] text-[#8A8A8A] text-sm py-2 px-6 rounded-full">
              Our Services
            </div>
          </div>

          {/* Section Heading */}
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
            Services for Customer
          </h2>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {servicesPage.map((service) => (
              <Link to='/serviceDetails'>
              <div
                key={service.id}
                className="bg-[#333437] rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(74,132,255,0.15)]"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-white text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-[#B8B8B8] mb-8 flex-grow">
                  {service.description}
                </p>
                <button className="w-10 h-10 rounded-full border border-[#727272] flex items-center justify-center self-start hover:bg-[#4a84ff] hover:border-[#4a84ff] transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#1C1D20] text-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-24">
            <p className="text-[#4A84FF] mb-4">Process To Succeeded</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Step-By-Step To
              <br />
              Achieve Results
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-[71%] top-[14%] w-px border-l border-dashed border-white/30 hidden md:block"></div>

            {/* Steps */}
            <div className="space-y-12">
              {stepsDetails.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Step Number */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#1c1c1c] rounded-full flex items-center justify-center z-10 hidden md:flex">
                    <span className="text-white text-2xl font-bold">
                      {step.id}
                    </span>
                  </div>

                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-[190px] items-center px-12 lg:px-0 ${
                      index % 2 === 0 ? "" : "md:grid-flow-dense"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`${
                        index % 2 === 0 ? "md:pr-16" : "md:pl-16 md:col-start-2"
                      }`}
                    >
                      <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        {step.title}
                      </h3>
                      <p className="text-white/70 mb-8">{step.description}</p>
                      <a
                        href={step.buttonLink}
                        className="inline-block bg-[#1c1c1c] hover:bg-[#2c2c2c] text-white py-3 px-6 rounded-md transition-colors"
                      >
                        {step.buttonText}
                      </a>
                    </div>

                    {/* Image */}
                    <div
                      className={`${
                        index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                      }`}
                    >
                      <div className="">
                        <img
                          src={step.image}
                          alt={step.imageAlt}
                          className=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div>
              <div className="relative">
                <img
                  src={Orange}
                  alt="Woman in profile with artistic elements"
                  className=""
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
                Provide Innovative Solutions For Your Needs
              </h1>
              <p className="text-white/70 mb-12 max-w-lg">
                Scelerisque sed cursus duvac and vivit nunc Phasellus nunc maecenaseu nonornarequet quisque sagittis.
                Diam sed tempus non nunc. Adipiscing sagittis.
              </p>

              {/* Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center lg:text-left">
                  <div className="items-center mb-4">
                    <div className="w-10 h-10 lg:mr-4 m-auto lg:m-0">
                     <img src={direction} alt="" />
                    </div>
                    <h3 className="my-4 text-lg font-semibold uppercase tracking-wider">BRANDING STRATEGY</h3>
                  </div>
                  <p className="text-white/70">
                    There are many variations of passages of Lorem Ipsum available majority.
                  </p>
                </div>

                <div className="text-center lg:text-left">
                  <div className="items-center mb-4">
                    <div className="w-10 h-10 lg:mr-4 m-auto lg:m-0">
                    <img src={direction1} alt="" />
                    </div>
                    <h3 className="my-4 text-lg font-semibold uppercase tracking-wider">CONTENT CREATION</h3>
                  </div>
                  <p className="text-white/70">
                    There are many variations of passages of Lorem Ipsum available majority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-16 md:py-24 px-12 lg:px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Creative Strategies
            <br />
            To Get YouGrowing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Branding Card */}
            <div className="bg-[#f5f5f5] text-black p-8 rounded-lg relative">
              <div className="text-6xl font-bold text-[#e0e0e0] mb-4">01</div>
              <h3 className="text-4xl  font-medium mb-6">BRANDING</h3>
              <div className="w-full h-px bg-[#e0e0e0] mb-6"></div>
              <p className="text-gray-600 mb-12">
                Amet quam felis nec cursus Proin molestie sit blandit facilisi elementum et diam. Duis convallis
                pharetra morbi feugiat velit.
              </p>
              <button className="transform rotate-320 absolute bottom-8 right-8 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Designing Card */}
            <div className="bg-[#f5f5f5] text-black p-8 rounded-lg relative">
              <div className="text-6xl font-bold text-[#e0e0e0] mb-4">02</div>
              <h3 className="text-4xl  font-medium mb-6">DESIGNING</h3>
              <div className="w-full h-px bg-[#e0e0e0] mb-6"></div>
              <p className="text-gray-600 mb-12">
                Amet quam felis nec cursus Proin molestie sit blandit facilisi elementum et diam. Duis convallis
                pharetra morbi feugiat velit.
              </p>
              <button className="absolute transform rotate-320 bottom-8 right-8 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white " />
              </button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
    <div className="bg-[#1C1D20] text-white">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 mb-20">
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We Empower Innovate With Purpose
            </h1>
          </div>
          <div className="lg:w-1/2">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-t border-gray-700">
                <button
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-sm font-medium tracking-wider">
                    {item.title}
                  </span>
                  <PlusIcon className="h-4 w-4 flex-shrink-0" />
                </button>
                {activeAccordion === index && (
                  <div className="pb-4 pr-8">
                    <p className="text-gray-400">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-gray-700"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-20 mt-16 text-center lg:text-left ">
          {statsPage.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}
              </span>
              <span className="text-xs font-medium tracking-wider mb-3">
                {stat.title}
              </span>
              <p className="lg:w-[180px] text-xs text-gray-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

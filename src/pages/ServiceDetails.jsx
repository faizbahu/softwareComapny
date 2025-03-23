import React, { useState } from "react";
import service from "../assets/service.png";
import { Navbar } from "../components/Navbar";
import { PlayCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "lucide-react";
import discussion from "../assets/discussion.png";
import { servicesDetails } from "../utils/data";
export default function ServiceDetails() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const toggleAccordion = (title) => {
    setActiveAccordion(activeAccordion === title ? null : title);
  };
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 relative overflow-hidden">
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
        <div className="container mx-auto py-20 md:py-32 relative z-10 px-[38px] lg:px-0 flex flex-col h-[100vh] justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Service Details
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
                Service Details
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

      <div className="bg-[#1c1e22] text-white min-h-screen w-full">
        <div className="container mx-auto px-4 py-24 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-[40px]">
            <div className="flex-[2] max-w-[600px]">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Product Design: Your Digital Presence
              </h1>
              <p className="text-sm text-gray-300 mb-6">
                Select Amplify, we specialize in comprehensive analytical and
                strategic solutions designed to propel your online presence to
                new heights. Our team of digital experts, strategists, and
                content creators unite to craft solutions that not only meet
                your business goals, but exceed all your expectations.
              </p>
              <div className="mb-8">
                <img
                  src={discussion}
                  alt="Team working on digital design"
                  className="w-full rounded-md"
                />
              </div>
              <div className="mt-12">
                <h2 className="text-xl font-bold mb-4">Services Overview</h2>
                <p className="text-sm text-gray-300">
                  From content analytics to targeted campaigns, we recognize the
                  ever-evolving digital landscape to ensure your brand stands
                  out. Whether you're aiming for increased brand awareness,
                  enhanced engagement, or lead generation, our tailored,
                  comprehensive approach delivers results. With our expertise,
                  we'll help you cultivate a meaningful digital presence and
                  ensure the full potential of your brand is met.
                </p>
              </div>
              <div className="bg-[#272a30] p-6 rounded-md mt-8 relative">
                <p className="text-lg">
                  "Quick solutions coupled with extraordinary performance— a
                  recommendation that's great though. James Bond USA."
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-8 h-8 bg-[#272a30] rounded-full flex items-center justify-center">
                    <ChevronDownIcon size={16} className="rotate-180" />
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h2 className="text-xl font-bold mb-4">
                  Qualifications & Requirements
                </h2>
                <p className="text-sm text-gray-300">
                  Proficiency in cutting-edge visual design utilizing tools such
                  as Sketch, Photoshop, Figma... Experience with front-end
                  development and UI design principles is highly preferred to
                  bridge any gaps between conceptualization and media mockups
                  along with business goals. Proficiency in creating
                  visually-rich digital product guides, metrics, and analytics
                  dashboards required with proven UX/UI skills. A portfolio
                  showcasing previous digital product designs that demonstrate
                  better performance and ROI.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-8 bg-[#2C2E32]">
                {servicesDetails.map((service, index) => (
                  <div key={index} className="border-b border-gray-700">
                    <button
                      className="flex justify-between items-center w-full py-3 px-4 text-left"
                      onClick={() => toggleAccordion(service.title)}
                    >
                      <span className="text-sm">{service.title}</span>
                      <ChevronDownIcon
                        size={16}
                        className="transform rotate-270"
                      />
                    </button>
                    {activeAccordion === service.title && (
                      <div className="px-4 pb-3">
                        <p className="text-xs text-gray-400">
                          {service.content || "Service details coming soon."}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-blue-500 p-6 rounded-md text-center mt-12">
                <p className="font-bold mb-2 text-black">Any Questions?</p>
                <p className="mb-4 font-bold mb-2 text-black">Let's talk</p>
                <button className="bg-white text-black px-6 py-2 rounded-md text-sm font-medium">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

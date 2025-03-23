import React from "react";
import { Navbar } from "../components/Navbar";
import BlogImage from "../assets/blog.png";
import { PlayCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPage } from "../utils/data";
import { Clock, CircleUserRound } from "lucide-react";
import { CheckCircle } from "lucide-react";
import ID1 from "../assets/id-1.png";
import ID2 from "../assets/id-2.png";
import ID3 from "../assets/id-3.png";
import Partner1 from "../assets/partner-1.png";
import Partner2 from "../assets/partner-2.png";
export default function BlogPage() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 relative overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${BlogImage})`,
            backgroundPosition: "center 30%",
          }}
        ></div>
        <Navbar />
        {/* Content container */}
        <div className="bg-[#1F1E28] opacity-60 z-0 container mx-auto  py-20 md:py-32 relative z-10 px-[38px] lg:px-0 flex flex-col h-[100vh] justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Blog Page
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
              <li className="text-gray-300 text-[16px] font-bold">Blog Page</li>
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
      <div className="bg-[#121212] py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <div className="flex justify-center mb-3">
            <div className="bg-[#333437] text-white text-sm py-2 px-6 rounded-full inline-block">
              Latest Blog
            </div>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center  mb-16">
            Take a look at our
            <br />
            articles & resources
          </h2>
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[850px] mx-auto">
            {blogPage.map((post) => (
              <div key={post.id} className="flex flex-col h-full">
                {/* Blog Image */}
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Blog Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center bg-[#24262A] text-white text-sm py-1 px-3 rounded-full">
                    <CircleUserRound className="w-4 h-4 mr-2 text-[#4A84FF]" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center text-[#8a8a8a] text-sm">
                    <Clock className="w-4 h-4 mr-2 text-[#4A84FF]" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {post.title}
                  </h3>
                </div>

                {/* Read More Button */}
                <div className="mt-auto">
                  <a
                    href={post.url}
                    className="cursor-pointer mt-8 bg-white text-black px-8 py-3 rounded-md font-medium"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-black text-white py-24 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
            {/* Left section with images */}
            <div className="w-full md:w-2/5 relative">
              {/* <div className="rounded-lg overflow-hidden">
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/i5pJwXR6zSKNZjZCUeGSTs/image.png"
                alt="Business professionals in suits"
                className="w-full h-auto"
              />
            </div> */}
              {/* Client count and avatars */}
              <div className="flex items-end gap-5">
              <div className="">
                <div>
                  <img src={Partner2} alt="" />
                </div>
                <div className="flex items-center mt-4">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-14 h-14 rounded-full border-2 border-black">
                      <img src={ID1} alt="" />
                    </div>
                    <div className="w-14 h-14 rounded-full border-2 border-black">
                      <img src={ID2} alt="" />
                    </div>
                    <div className="w-14 h-14 rounded-full border-2 border-black">
                      <img src={ID3} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-xl">105+</div>
                    <div className="text-xs text-gray-400">Happy clients</div>
                  </div>
                </div>
              </div>
              <div>
                <img src={Partner1} alt="" />
              </div>
              </div>
            </div>
            {/* Right section with text content */}
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why We're Your Perfect Partner
              </h2>
              <p className="text-gray-300 mb-6">
                Mentoro combines innovation, expertise, and a results-driven
                approach to provide customized marketing strategies that improve
                ROI.
              </p>
              {/* Bullet points */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Client-Centric Approach</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">
                    Collaborative Project Execution
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">
                    Influencer and Affiliate Marketing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

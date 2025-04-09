import React, { Fragment } from "react";
import { useState } from "react";
import { PlayCircleIcon } from "lucide-react";
import Hero12 from "../assets/hero_img.png";
import ChooseUs from "../assets/chooseUs.png";
import { Navbar } from "../components/Navbar";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { services } from "../utils/data";
import ProjectCarousel from "../components/ProjectsCarousel";
import testimonialPic from "../assets/pic.png";
import backgroundImage from "../assets/background.png";
import { PhoneCall } from "lucide-react";
import { testimonials } from "../utils/data";
import { stats } from "../utils/data";
import AccordionItem from "../components/AccordianItem";
import { accordionData } from "../utils/data";
import { Clock, CircleUserRound } from "lucide-react";
import { blogPosts } from "../utils/data";
import consent from "../assets/consent.png";
import { CircleCheck } from "lucide-react";
import LongSection from "../assets/longSection.png";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 relative overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Hero12})`,
            backgroundPosition: "center 30%",
          }}
        ></div>
        <Navbar />
        {/* Content container */}
        <div className="container mx-auto  py-20 md:py-32 relative z-0 px-[38px] lg:px-0 flex flex-col h-[100vh] justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Innovative Solutions For Your Digital Needs.
            </h1>
            <p className="text-gray-300 mt-6 text-sm md:text-base max-w-lg">
              Customer satisfaction is at the core of our business philosophy.
              We strive to build long-lasting relationships with our clients.
            </p>
            <button className="cursor-pointer mt-8 bg-blue-500 hover:bg-blue-600 text-black px-8 py-3 rounded-md font-medium">
              Explore More
            </button>
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
      <div className="bg-[#111112] relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className=" inset-0 opacity-10">
          <div
            className="w-full h-full border-[0.5px] border-white/10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>
        <div className="bg-[#1C1D20] text-white md:py-24">
        <div className="lg:pb-24 py-12 lg:py-0">
            <img src={LongSection} alt="" />
          </div>
        <div className="container mx-auto px-4 pb-24 lg:pb-0">
          
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Image Section */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={consent}
                  alt="Business meeting with professionals collaborating"
                  className="object-cover"
                />
              </div>
            </div>
            {/* Content Section */}
            <div className="md:w-1/2 space-y-6">
              <div className="w-fit bg-[#333437] text-blue-500 text-sm py-2 px-6 rounded-full">
                About our company
              </div>
              {/* <p className="text-blue-500 text-sm">Meet our company</p> */}
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Innovative Advisory <br />
                Business Solutions.
              </h1>
              <p className="text-gray-300 text-sm md:text-base">
              Excepteur sint occaecat cupidatat officia non proident <br />
              sunt in culpa qui deserunt.
              </p>
              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <CircleCheck className="text-blue-500 w-5 h-5" />
                  <span className="text-sm md:text-base">
                    Free Consultation
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheck className="text-blue-500 w-5 h-5" />
                  <span className="text-sm md:text-base">
                    100% Certified Teams
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheck className="text-blue-500 w-5 h-5" />
                  <span className="text-sm md:text-base">
                    Step-by-Step Client Support
                  </span>
                </div>
              </div>
              {/* CTA Button */}
              <div className="pt-2">
                <button className="cursor-pointer font-medium bg-white hover:bg-black hover:text-white text-black px-6 py-2 rounded transition-colors">
                  About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="max-w-7xl mx-auto relative z-10 py-24 px-12 lg:px-0">
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
            {services.map((service) => (
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
            ))}
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center">
            <button className="cursor-pointer mt-8 bg-blue-500 hover:bg-blue-600 text-black px-8 py-3 rounded-md font-medium">
              Explore More
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#141414] text-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <p className="w-fit mx-auto lg:mx-0 mb-4 bg-[#333437] text-[#8A8A8A] text-sm py-2 px-6 rounded-full">
              Our Projects
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Visit Our Recent
              <br />
              Clients Project.
            </h2>
          </div>
          <ProjectCarousel />
        </div>
      </div>
      <div className="bg-[#1C1D20]  py-24 px-4 md:px-8 lg:px-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative mx-auto md:mx-0 max-w-md">
              {/* Decorative curved lines */}
              {/* Image with frame effect */}

              <div className="">
                <img
                  src={testimonialPic}
                  alt={currentTestimonial.imageAlt}
                  className="bg-[#1C1D20] max-w-[390px]"
                />
              </div>
            </div>

            {/* Right side - Testimonial content */}
            <div className="relative">
              {/* Testimonial label */}
              <div className="mb-8 flex justify-start md:justify-start">
                <div className="bg-[#333437] text-white text-sm py-2 px-6 rounded-full inline-block">
                  Testimonial
                </div>
              </div>

              {/* Quote */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-12">
                  What Our Clients Say
                </h2>

                {/* Star rating */}
                <div className="flex mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#ffda15] text-white"
                    />
                  ))}
                </div>

                <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                  {currentTestimonial.quote}
                </p>

                {/* Author */}
                <div>
                  <h4 className="text-white font-medium text-xl">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-white">{currentTestimonial.position}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-end space-x-3 mt-8">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-[#727272] flex items-center justify-center hover:bg-[#f0f0f0] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-5 h-5 text-[#727272]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-[#727272] flex items-center justify-center hover:bg-[#f0f0f0] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-5 h-5 text-[#727272]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-85" />
        {/* Content */}
        <div className="relative w-full flex items-center px-6 md:px-16 lg:px-24">
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 py-16">
            {/* Left section */}
            <div className="lg:max-w-md">
              <h1 className="text-center lg:text-left text-4xl md:text-5xl font-bold text-white leading-tight">
                Have Any Project <br />
                In Mind?
              </h1>
              <div className="items-center mt-8 flex flex-col sm:flex-row lg:items-start sm:items-center gap-6">
                <button className="cursor-pointer  bg-blue-500 hover:bg-blue-600 text-black px-8 py-3 rounded-md font-medium">
                  Let's Discuss
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <PhoneCall className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm">For More Info:</p>
                    <p className="text-white font-medium">00 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right section - Service Card */}
            <div className="lg:max-w-2/5">
              <div className="w-full bg-[#2C2E32] bg-opacity-70 rounded-md p-6 md:p-8">
                <div className="mb-4">
                  <div className="mx-auto lg:mx-0 mb-8 flex justify-start md:justify-start">
                    <div className="bg-[#333437] text-[#8A8A8A] text-sm py-2 px-6 rounded-full inline-block">
                      Testimonial
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Smart & Great Agency
                  <br />
                  For you Solutions
                </h2>
                <p className="text-gray-300 text-sm mb-8">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Proin
                  purus dolor sit amet consectetur lorem ipsum dolor sit amet
                  consectetur adipiscing.
                </p>
                {/* Service items */}
                <div className="space-y-6">
                  <div className="border-b-5 border-[#5F6063] pb-2">
                    <p className="text-white">Strategy</p>
                  </div>
                  <div className="border-b-5 border-[#5F6063] pb-2">
                    <p className="text-white">Planning</p>
                  </div>
                  <div className="border-b-5 border-[#5F6063] pb-2">
                    <p className="text-white">Intelligence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#1C1D20] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          {stats.map((stat, index) => (
            <Fragment key={index}>
              <div className="flex flex-col items-center py-4 sm:py-0">
                <p className="text-xl sm:text-2xl font-medium">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  {stat.label}
                </p>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden sm:block h-12 w-px bg-gray-700 mx-4"></div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#1C1D20] flex justify-center items-center p-4 gap-[70px] flex-col lg:flex-row">
      <div className="flex justify-center lg:justify-end">
          <img className="w-[70%]" src={ChooseUs} alt="" />
        </div>
        <div className="max-w-xl w-full py-16 px-12 lg:px-0">
          <div className="mb-3 text-center lg:text-left">
            <span className="text-xs font-medium bg-[#2c2d33] text-[#4a84ff] px-3 py-1 rounded-full">
              Our Benefit
            </span>
          </div>
          <h2 className="text-center lg:text-left text-white text-3xl md:text-4xl font-bold mb-8">
            Why You Choose
            <br />
            Aizflex Agency.
          </h2>
          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isActive={activeIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1C1D20] py-16 md:py-24 px-12 lg:px-4">
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
            {blogPosts.map((post) => (
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
                    className="cursor-pointer mt-8 bg-blue-500 hover:bg-blue-600 text-black px-8 py-3 rounded-md font-medium"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </>
  );
};
export default HomePage;

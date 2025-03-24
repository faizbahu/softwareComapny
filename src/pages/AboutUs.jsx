import React , { Fragment } from "react";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import Image1 from "../assets/images.png";
import Image2 from "../assets/images-1.png";
import Group from "../assets/group.png";
import { CircleCheck } from "lucide-react";
import consent from "../assets/consent.png";
import team1 from "../assets/team-1.png";
import team2 from "../assets/team-2.png";
import team3 from "../assets/team-3.png";
import team4 from "../assets/team-4.png";
import bg from "../assets/bg.png";
import { stats } from "../utils/data";
import { accordionData } from "../utils/data";
import AccordionItem from "../components/AccordianItem";
import ChooseUs from "../assets/chooseUs.png";
import backgroundImage from "../assets/background.png";
import { PhoneCall } from "lucide-react";
export default function AboutUs() {
  const teamMembers = [
    {
      name: "Donna Gordon",
      role: "Chef Advisor",
      image: team4,
    },
    {
      name: "Donna Gordon",
      role: "Chef Advisor",
      image: team1,
    },
    {
      name: "Donna Gordon",
      role: "Chef Advisor",
      image: team2,
    },
    {
      name: "Donna Gordon",
      role: "Chef Advisor",
      image: team3,
    },
  ];
  // const [currentIndex, setCurrentIndex] = useState(0);
  
    
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 relative overflow-hidden">
        {/* Background image */}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1D20] to-[#111112] opacity-90"></div>

        {/* Navbar */}
        <Navbar />
        <div className="mx-auto  text-center mt-24 z-[0] relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Dedicated to Very Talented, Name
            <br />
            is a team of
            <span className="mx-1">
              35
              <span className="inline-flex">
                {" "}
                <img src={Image1} alt="" />
              </span>
            </span>
            passionate
            <br />
            professionals.{" "}
            <span className="inline-flex">
              {" "}
              <img src={Image2} alt="" />
            </span>
          </h1>
        </div>
        <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-xl z-[0] relative mt-16 mb-24 mx-auto">
          <img
            src={Group}
            alt="Two professionals collaborating at a desk"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="bg-[#1C1D20] text-white">
        <div className="container mx-auto px-4 py-8 md:py-24">
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
      <div className="bg-[#0e0e10] bg-grid-pattern">
        <div className="container mx-auto py-16 md:py-24">
          <div className="flex flex-col items-center mb-16">
            <div className="bg-[#2d3b55] text-[#4a84ff] px-4 py-1.5 rounded-full text-sm mb-6">
              Our Team
            </div>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-3xl">
              Meet Our Talented
              <br />
              Team Members.
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className=" rounded-3xl overflow-hidden relative"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-50"></div>

                {/* Background Pattern */}

                {/* Image Container */}
                <div className="relative z-10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover z-[10] relative mx-auto"
                  />
                  <div
                    style={{
                      backgroundImage: `url(${bg})`,
                      backgroundPosition: "center 100%",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="absolute inset-0"
                  ></div>
                </div>

                {/* Text Section */}
                <div className="p-4 relative z-10">
                  <h3 className="text-white text-lg font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
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

      <div className="gap-[70px] w-full bg-[#1C1D20] flex justify-center items-center p-4 py-24">
        <div className="flex justify-end">
          <img className="w-[70%]" src={ChooseUs} alt="" />
        </div>
        <div className="max-w-xl w-full py-16">
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
        <div className="relative flex items-center px-6 md:px-16 lg:px-24 justify-center">
          <div className="">
            {/* Left section */}
            <div className="">
              <h1 className="text-center lg:text-left text-4xl md:text-5xl font-bold text-white leading-tight">
              Let’s Request a Schedule<br />
              For Free Consultation 
                
              </h1>
              <div className="justify-center mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
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
            
          </div>
        </div>
      </div>
    </>
  );
}

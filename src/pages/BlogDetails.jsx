// import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import Group1 from "../assets/group-1.png"
import Group2 from "../assets/group-2.png"
import face from "../assets/logo-face.png"
import { Navbar } from "../components/Navbar";
import BlogImage from "../assets/blog.png";
import { PlayCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
// import { blogPage } from "../utils/data";
import { Clock, CircleUserRound } from "lucide-react";
import { CheckCircle } from "lucide-react";
import ID1 from "../assets/id-1.png";
import ID2 from "../assets/id-2.png";
import ID3 from "../assets/id-3.png";
import Partner1 from "../assets/partner-1.png";
import Partner2 from "../assets/partner-2.png";
export default function BlogDetails() {
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
        <div className=" z-0 container mx-auto  py-20 md:py-32 relative  px-[38px] lg:px-0 flex flex-col h-[100vh] justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Blog Details
            </h1>
            <ul className="flex items-center gap-2 mt-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#B8B8B8] text-[16px] font-bold"
                >
                  Home
                </Link>
              </li>
              <span className="text-gray-400">•</span>
              <li className="text-[#B8B8B8] text-[16px] font-bold">Blog Page Details</li>
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
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-16 md:py-24 px-12 lg:px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 bg-[#333333] rounded-full px-3 py-1">
            {/* <div className="w-5 h-5 rounded-full bg-[#555555] flex items-center justify-center text-xs">N</div>
            <span className="text-sm text-[#B8B8B8]">Nicole Smith</span> */}
            <CircleUserRound className="w-4 h-4 mr-1 text-[#4A84FF]" />
                                <span className="text-[#B8B8B8]">Nicole Smith</span>
          </div>
          <div className="flex items-center gap-2 bg-[#333333] rounded-full px-3 py-1">
            {/* <div className="w-4 h-4"> */}
              {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#B8B8B8]">
                <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-sm text-[#B8B8B8]">Feb 28, 2025</span> */}
             <Clock className="w-4 h-4 mr-1 text-[#4A84FF]" />
                                <span className="text-[#B8B8B8]">Feb 28, 2025</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Leadership Inspiring Success Stories.</h1>

        {/* Hero Image */}
        <div className="relative w-full rounded-lg overflow-hidden mb-12">
          <img src={Group1} alt="Team collaborating in office" fill className="object-cover" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">What we learned from this Blog</h2>

            <p className="text-[#B8B8B8] mb-4">
              From content creation to targeted campaigns, we navigate the ever-evolving social landscape to ensure your
              brand stands out. Whether you're aiming for increased brand awareness, enhanced engagement, or{" "}
              <span className="text-[#4A84FF]">Lead Generation</span>, our innovative approaches and data-driven insights
              pave the way for your success in the digital realm. Let us amplify your social presence and unlock the
              full potential of your brand's impact.
            </p>

            <p className="text-[#B8B8B8] mb-8">
              could refer to a record or documentation detailing the historical challenges faced by various projects
              within an organization or across multiple endeavors. It might encompass
            </p>

            {/* Second Image */}
            <div className="relative w-full rounded-lg overflow-hidden mb-4">
              <img src={Group2} alt="Team working together" fill className="object-cover" />
            </div>
            <p className="text-center text-sm text-gray-400 mb-12">I completed 2500+ projects yearly.</p>

            {/* Benefits Section */}
            <h2 className="text-3xl font-bold mb-6">Top 3 Benefits of Marketing Agency</h2>

            <p className="text-[#B8B8B8] mb-8">
              Proficiency in utilizing various social media platforms (such as Facebook, Instagram, Twitter, LinkedIn,
              TikTok, etc.) and understanding their unique dynamics. Ability to devise and execute comprehensive social
              media strategies aligned with business goals. Proficiency in creating engaging and relevant
              content—written, visual, or multimedia—that resonates with diverse audiences. Capability to interpret data
              analytics and derive insights to refine strategies for better performance and ROI.
            </p>

            <ol className="list-decimal list-inside mb-12 pl-4 space-y-2 text-[#B8B8B8]">
              <li>High Standard Business solutions for the Blog</li>
              <li>Make research and find out the solution</li>
              <li>Branding is the most useful way for new company</li>
            </ol>

            {/* Testimonial */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 mb-12">
              <p className="text-xl font-medium mb-4">
                Quick solutions coupled with extraordinary <br /> performance— a recommendation that's <br /> great though.
              </p>
              {/* <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-600"></div>
              </div> */}
            </div>

            <p className="text-[#B8B8B8] mb-12">
              could refer to a record or documentation detailing the historical challenges faced by various projects
              within an organization or across multiple endeavors. It might encompass
            </p>

            {/* Process Section */}
            <h2 className="text-3xl font-bold mb-6">The Creative Agency's Process</h2>

            <p className="text-[#B8B8B8] mb-6">
              Proficiency in utilizing various social media platforms (such as Facebook, Instagram, Twitter, LinkedIn,
              TikTok, etc.) and understanding their unique dynamics. Ability to devise and execute comprehensive social
              media strategies aligned with business goals.
            </p>

            <ul className="list-disc list-inside mb-12 pl-4 space-y-2 ">
              <li>Work Harder & Gain Success</li>
              <li>Exploring Business Landscapes in Gento.</li>
            </ul>

            <p className="text-[#B8B8B8] mb-4">
              From content creation to targeted campaigns, we navigate the ever-evolving social landscape to ensure your
              brand stands out. Whether you're aiming for increased brand awareness, enhanced engagement, or lead
              generation, our innovative approaches and data-driven insights pave the way for your success in the
              digital realm. Let us amplify your social presence and unlock the full potential of your brand's impact.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1a1a] rounded-lg p-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24  rounded-full overflow-hidden mb-4">
                  <img src={face} alt="Nicole Smith" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">Nicole Smith</h3>
                <p className="text-sm font-medium text-gray-400 mb-4">CEO & CO Founder</p>
                <p className="text-sm text-[#B8B8B8] mb-6">
                  Lorem Ipsum is simply dummy text of the printing typeset industry. Lorem Ipsum hasIt is a long est
                  fact that a reader will be.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center hover:bg-[#444] transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center hover:bg-[#444] transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center hover:bg-[#444] transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

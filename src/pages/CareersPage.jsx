import { Link } from "react-router-dom";
import { ChevronRight, MapPin } from "lucide-react"
import { Navbar } from "../components/Navbar";
import { Laptop, Umbrella, Clock, Plus, Briefcase, Users } from "lucide-react"
import testPic from "../assets/test-pic.png"
import { TestimonialCard } from "../components/Testimonial-card"
import CirclePic from "../assets/circle-pic.png"
export default function CareersPage() {
    
  return (
    <div>
    <Navbar />
    <main className="relative w-full min-h-screen  flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Profile images */}
      <div className="absolute inset-0">
        {/* Top left */}
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          alt="Team member"
          className="absolute w-14 h-14 rounded-full object-cover border-2 border-blue-400/20 left-[20%] top-[15%] md:w-16 md:h-16"
        />
        {/* Top */}
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          alt="Team member"
          className="absolute w-12 h-12 rounded-full object-cover border-2 border-blue-400/20 left-[35%] top-[10%] md:w-14 md:h-14"
        />
        {/* Top right */}
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          alt="Team member"
          className="absolute w-12 h-12 rounded-full object-cover border-2 border-blue-400/20 left-[48%] top-[12%] md:w-14 md:h-14"
        />
        {/* Middle left */}
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          alt="Team member"
          className="absolute w-14 h-14 rounded-full object-cover border-2 border-blue-400/20 left-[15%] top-[40%] md:w-16 md:h-16"
        />
        {/* Bottom left */}
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          alt="Team member"
          className="absolute w-16 h-16 rounded-full object-cover border-2 border-blue-400/20 left-[22%] top-[65%] md:w-18 md:h-18"
        />
        {/* Bottom */}
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          alt="Team member"
          className="absolute w-14 h-14 rounded-full object-cover border-2 border-blue-400/20 left-[40%] bottom-[15%] md:w-16 md:h-16"
        />
        {/* Top right */}
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          alt="Team member"
          className="absolute w-16 h-16 rounded-full object-cover border-2 border-blue-400/20 right-[20%] top-[20%] md:w-18 md:h-18"
        />
        {/* Middle right */}
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          alt="Team member"
          className="absolute w-12 h-12 rounded-full object-cover border-2 border-blue-400/20 right-[15%] top-[45%] md:w-14 md:h-14"
        />
        {/* Bottom right */}
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          alt="Team member"
          className="absolute w-16 h-16 rounded-full object-cover border-2 border-blue-400/20 right-[25%] bottom-[20%] md:w-18 md:h-18"
        />
        {/* Bottom right corner */}
        <img
          src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          alt="Team member"
          className="absolute w-12 h-12 rounded-full object-cover border-2 border-blue-400/20 right-[35%] bottom-[30%] md:w-14 md:h-14"
        />
      </div>
      {/* Content */}
      <div className="z-10 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Join Our Fast <br /> Growing Startup
        </h1>
        <p className="text-gray-400 mb-8 text-sm md:text-base max-w-lg mx-auto">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
          reprehenderit in.
        </p>
        <button className="bg-[#4A84FF] hover:bg-blue-600 text-black font-medium py-2 px-6 rounded-md transition-colors flex items-center mx-auto">
          Join our team
        </button>
      </div>
    </main>
    <main className="min-h-screen bg-[#121212] bg-grid-pattern text-white">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Working With Us?</h2>
          <p className="text-base md:text-lg text-gray-300">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            aute irure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1E1E1E] rounded-lg p-8">
            <div className="flex items-start">
              <div className="mr-4">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">100% remote</h3>
                <p className="text-gray-300">Lorem ipsum dolor sit amet elit sed consectetur sit adipiscing.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1E1E1E] rounded-lg p-8">
            <div className="flex items-start">
              <div className="mr-4">
                <Umbrella className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Unlimited PTO</h3>
                <p className="text-gray-300">Ut enim ad minim veniam, quis nostrud exercitation amet.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1E1E1E] rounded-lg p-8">
            <div className="flex items-start">
              <div className="mr-4">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Flexible hours</h3>
                <p className="text-gray-300">Duis aute irure dolor in amet dolor reprehenderit in voluptate.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1E1E1E] rounded-lg p-8">
            <div className="flex items-start">
              <div className="mr-4">
                <Plus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Medical insurance</h3>
                <p className="text-gray-300">Ut enim ad minim veniam, quis nostrud exercitation amet.</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#1E1E1E] rounded-lg p-8">
            <div className="flex items-start">
              <div className="mr-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Career growth</h3>
                <p className="text-gray-300">Duis aute irure dolor in amet dolor reprehenderit in voluptate.</p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#1E1E1E] rounded-lg p-8">
            <div className="flex items-start">
              <div className="mr-4">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Great culture</h3>
                <p className="text-gray-300">Lorem ipsum dolor sit amet elit sed consectetur sit adipiscing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 bg-[1C1D20]">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          {/* Image container with rounded corners */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-[40px] overflow-hidden relative aspect-square md:aspect-auto md:h-[500px] shadow-[0_0_40px_rgba(0,0,0,0.03)]">
              <img
                src={testPic}
                alt="Team collaboration meeting"
                fill
                className="object-cover grayscale"
                priority
              />
            </div>
          </div>

          {/* Text content */}
          <div className="w-full md:w-1/2 py-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 text-[24px] font-light leading-relaxed">
              Committed to your project's growth, we design tailored marketing strategies that foster innovation, build
              strong connections, and drive measurable results. Our team works alongside you to enhance visibility,
              engagement, and long-term success. Through dedication, creativity, and data-driven insights, we help your
              project thrive in an ever-evolving market.
            </p>
          </div>
        </div>
      </div>
    </main>
    <div className="min-h-screen bg-[#121212] text-white px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Open positions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            aute irure.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          <button className="px-6 py-2 rounded-md bg-[#4A84FF] text-black font-medium">All</button>
          <button className="px-6 py-2 rounded-md bg-[#1a1d29] text-white font-medium hover:bg-opacity-80 transition-colors">
            Marketing
          </button>
          <button className="px-6 py-2 rounded-md bg-[#1a1d29] text-white font-medium hover:bg-opacity-80 transition-colors">
            Design
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <JobCard title="Product Data Analyst" />
          <JobCard title="Lead UI/UX Designer" />
          <JobCard title="VP of Marketing" />
          <JobCard title="Head of Mobile Design" />
          <JobCard title="Head of Inbound Marketing" />
          <JobCard title="VP of Design" />
        </div>
      </div>
    </div>
    <div className="min-h-screen bg-[#1C1D20] py-16 md:py-24 ">
      <div className="justify-center gap-[120px] mx-auto flex  items-center ">
        
        <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">What our  <br />  Teams ays</h1>
        <p className="text-gray-400 mb-8 text-sm md:text-base">
          Ut enim ad minim veniam, quis nostrud exercitation
          <br />
          ullamco laboris nisi ut aliquip ex ea commodo.
        </p>
        </div>
        <div className="flex gap-[30px]">
        <div className="flex flex-col gap-[30px]">
        <TestimonialCard
        quote="The best place to work"
        testimonial="Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim"
        image={CirclePic}
        title="John Carter"
        position="CEO & Co-Founder"
        className="bg-gray-800 p-6 rounded-lg"
      />
       <TestimonialCard
        quote="The team at Dataplus is the best"
        testimonial="Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim"
        image={CirclePic}
        title="Matt Cannon"
        position="VP of Product"
        className="bg-gray-800 p-6 rounded-lg"
      />

      {/* Testimonial 2 */}
      
      </div>
            <div className="flex flex-col mt-[90px] gap-[30px]">
      {/* Testimonial 3 */}
      <TestimonialCard
        quote="I love my work at Dataplus"
        testimonial="Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim"
        image={CirclePic}
        title="Sophie Moore"
        position="VP of Product"
        className="bg-gray-800 p-6 rounded-lg"
      />

      {/* Testimonial 4 */}
      <TestimonialCard
        quote="An amazing place to work"
        testimonial="Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim"
        image={CirclePic}
        title="Mike Warren"
        position="VP of Product"
        className="bg-gray-800 p-6 rounded-lg"
      />
      </div>
        </div>
      </div>
    </div>
    </div>
  )
}
function JobCard({ title }) {
    return (
      <a href="#" className="block bg-[#2C2E32] rounded-xl p-6 hover:bg-[#252836] transition-colors">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <ChevronRight className="text-gray-400" />
        </div>
      </a>
    )
  }

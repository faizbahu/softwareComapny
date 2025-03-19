import React from 'react'
import { PhoneCall  } from 'lucide-react'
import backgroundImage from '../assets/background.png'
const Hero = () => {
  return (
    <div className="relative py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:`url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-85" />
      {/* Content */}
      <div className="relative w-full min-h-screen flex items-center px-6 md:px-16 lg:px-24">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 py-16">
          {/* Left section */}
          <div className="lg:max-w-md">
            <h1 className="text-center lg:text-left text-4xl md:text-5xl font-bold text-white leading-tight">
              Have Any Project <br />
              In Mind?
            </h1>
            <div className="items-center mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="px-6 py-3 bg-blue-600 text-black font-medium rounded hover:bg-blue-700 transition-colors">
                Let's Discuss
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <PhoneCall  className="w-10 h-10 text-white" />
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
              <div className="bg-[#333437] text-[#8A8A8A] text-sm py-2 px-6 rounded-full inline-block">Testimonial</div>
            </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Smart & Great Agency
        <br />
        For you Solutions
      </h2>
      <p className="text-gray-300 text-sm mb-8">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Proin purus
        dolor sit amet consectetur lorem ipsum dolor sit amet consectetur
        adipiscing.
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
  )
}
export default Hero

import React from 'react'
import { PlayCircleIcon } from 'lucide-react'
import Hero12 from '../assets/hero_img.png'
import { Navbar } from './Navbar'
export const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:`url(${Hero12})`,
          backgroundPosition: 'center 30%',
        }}
      ></div>
      <Navbar/>
      {/* Content container */}
      <div className="container mx-auto  py-20 md:py-32 relative z-10 px-[38px] lg:px-0 flex flex-col h-[100vh] justify-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Innovative Solutions For Your Digital Needs.
                </h1>
                <p className="text-gray-300 mt-6 text-sm md:text-base max-w-lg">
                  Customer satisfaction is at the core of our business philosophy. We
                  strive to build long-lasting relationships with our clients.
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
  )
}

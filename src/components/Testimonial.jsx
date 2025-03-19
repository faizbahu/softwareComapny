"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import testimonialPic from "../assets/pic.png"
export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Nicole Westervelt",
      position: "CEO & Founder",
      quote:
        "I couldn't be happier with the results. The team went above and beyond to deliver a product that exceeded our expectations. Their attention to detail and commitment to quality is unmatched in the industry.",
      rating: 5,
      image: "testimonialPic",
      imageAlt: "Portrait of Nicole Westervelt",
    },
    {
      id: 2,
      name: "Michael Thompson",
      position: "Marketing Director",
      quote:
        "Working with this team has been a game-changer for our business. Their strategic approach and innovative solutions have helped us reach new heights. I highly recommend their services to anyone looking to grow their business.",
      rating: 4,
      image: "testimonialPic",
      imageAlt: "Portrait of Michael Thompson",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "Product Manager",
      quote:
        "The level of professionalism and expertise demonstrated by this team is remarkable. They not only delivered on time but also provided valuable insights that improved our product significantly. A truly exceptional experience.",
      rating: 5,
      image: "testimonialPic",
      imageAlt: "Portrait of Sarah Johnson",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="bg-[#1C1D20] min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative mx-auto md:mx-0 max-w-md">
            {/* Decorative curved lines */}
            {/* <div className="absolute -right-4 top-1/4 w-full h-full z-0">
              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full opacity-20"
              >
                <path
                  d="M150,10 C223.5,10 283,69.5 283,143 C283,216.5 223.5,276 150,276 C76.5,276 17,216.5 17,143 C17,69.5 76.5,10 150,10 Z"
                  stroke="#CCCCCC"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M150,40 C206.5,40 253,86.5 253,143 C253,199.5 206.5,246 150,246 C93.5,246 47,199.5 47,143 C47,86.5 93.5,40 150,40 Z"
                  stroke="#CCCCCC"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M150,70 C189.5,70 222,102.5 222,143 C222,183.5 189.5,216 150,216 C110.5,216 78,183.5 78,143 C78,102.5 110.5,70 150,70 Z"
                  stroke="#CCCCCC"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div> */}

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
              <div className="bg-[#333437] text-white text-sm py-2 px-6 rounded-full inline-block">Testimonial</div>
            </div>

            {/* Quote */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-12">
                What Our Clients Say
              </h2>

              {/* Star rating */}
              <div className="flex mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ffda15] text-white" />
                ))}
              </div>

              <p className="text-white text-lg md:text-xl leading-relaxed mb-8">{currentTestimonial.quote}</p>

              {/* Author */}
              <div>
                <h4 className="text-white font-medium text-xl">{currentTestimonial.name}</h4>
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
  )
}


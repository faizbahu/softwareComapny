import React from 'react'
import ProjectCarousel from './ProjectsCarousel'
const ProjectsSection = () => {
  return (
    <div className="w-full bg-[#141414] text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
        
          <p className="w-fit mx-auto lg:mx-0 mb-4 bg-[#333437] text-[#8A8A8A] text-sm py-2 px-6 rounded-full">Our Projects</p>
        
          <h2 className="text-3xl md:text-4xl font-bold">
            Visit Our Recent
            <br />
            Clients Project.
          </h2>
        </div>
        <ProjectCarousel />
      </div>
    </div>
  )
}
export default ProjectsSection

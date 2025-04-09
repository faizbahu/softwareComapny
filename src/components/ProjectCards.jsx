import React from 'react'
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden flex max-w-[470px]">
      <div className="relative overflow-hidden flex-1">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        
      </div>
      <div className="p-6 flex-[2]">
      <img
          src={project.icon}
          alt={project.name}
          className="w-[110px] mb-[19px]"
        />
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-sm text-gray-400 mb-6">{project.description}</p>
        <div className="flex justify-between items-center border-t border-gray-700 pt-4">
          <div>
            <p className="text-xs text-gray-500">Client Name:</p>
            <p className="text-sm">{project.clientName}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Budget:</p>
            <p className="text-sm">{project.budget}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectCard

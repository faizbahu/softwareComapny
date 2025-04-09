import React, { useState ,useEffect} from 'react'
import ProjectCard from './ProjectCards'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import link from "../assets/Link.png"
import location from "../assets/location.png"
import bags from "../assets/bags.png"
import orbital from "../assets/orbital.png"
const projectsData = [
  {
    id: 1,
    name: 'CloudBridge',
    image: bags,
    icon: orbital,
    description:
      "Business strategy: the integral components of any organization's success. Business helps to be profitable.",
    clientName: 'IntelliWeb LLC',
    budget: '$100 - $450',
  },
  {
    id: 2,
    name: 'SnapQuest',
    image:location,
    icon: orbital,
    description:
      "Business strategy: the integral components of any organization's success. Business helps to be profitable.",
    clientName: 'WebWorks LLC',
    budget: '$350 - $450',
  },
  {
    id: 3,
    name: 'TechVista',
    image:link,
    icon: orbital,
    description:
      "Business strategy: the integral components of any organization's success. Business helps to be profitable.",
    clientName: 'DigiTech Corp',
    budget: '$200 - $400',
  },
]
const Projects = () => {
  const [startIndex, setStartIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(2) // Default for large screens

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 1023 ? 1 : 2) // 1 item for mobile, 2 for larger screens
    }
    
    updateItemsToShow() // Initial check
    window.addEventListener("resize", updateItemsToShow)
    
    return () => window.removeEventListener("resize", updateItemsToShow)
  }, [])

  const goToPrevious = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : projectsData.length - 1))
  }

  const goToNext = () => {
    setStartIndex((prev) => (prev < projectsData.length - 1 ? prev + 1 : 0))
  }

  const visibleProjects = () => {
    return Array.from({ length: itemsToShow }, (_, i) => {
      const index = (startIndex + i) % projectsData.length
      return projectsData[index]
    })
  }
  return (
    <div className="relative">
      <div className="absolute right-0 -top-16 flex space-x-2">
        <button
          onClick={goToPrevious}
          className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeftIcon size={20} />
        </button>
        <button
          onClick={goToNext}
          className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors"
          aria-label="Next project"
        >
          <ChevronRightIcon size={20} />
        </button>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 mt-4">
        {visibleProjects().map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
export default Projects

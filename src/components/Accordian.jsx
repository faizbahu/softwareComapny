import React, { useState } from 'react'
import AccordionItem from './AccordianItem'
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  const accordionData = [
    {
      title: 'Best Customer Support',
      content:
        'We provide 24/7 customer support to ensure all your questions and concerns are addressed promptly.',
    },
    {
      title: 'Globally Harmonized System',
      content:
        'Our system works seamlessly across different regions, ensuring consistent service quality worldwide.',
    },
    {
      title: 'Live Inventory Management',
      content:
        'Track and manage your inventory in real-time with our advanced inventory management system.',
    },
  ]
  return (
    <div className="w-full min-h-screen bg-[#121212] flex justify-center items-center p-4">
      <div className="max-w-xl w-full py-16">
        <div className="mb-3 text-center lg:text-left">
          <span className="text-xs font-medium bg-[#2c2d33] text-gray-300 px-3 py-1 rounded-full">
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
    
  )
}
export default Accordion

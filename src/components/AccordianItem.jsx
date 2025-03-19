import React from 'react'
import { PlusIcon } from 'lucide-react'
const AccordionItem = ({
  title,
  content,
  isActive,
  onClick,
}) => {
  return (
    <div className="border-b border-[#2c2d33]">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-white text-sm md:text-base font-medium">
          {title}
        </span>
        <span className="text-white">
          <PlusIcon
            size={18}
            className={`transition-transform ${isActive ? 'rotate-45' : ''}`}
          />
        </span>
      </button>
      {isActive && <div className="pb-4 text-gray-400 text-sm">{content}</div>}
    </div>
  )
}
export default AccordionItem

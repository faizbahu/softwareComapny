import React, { Fragment } from 'react'
export const StatsBar = () => {
  const stats = [
    {
      value: '25million',
      label: 'Client Satisfaction',
    },
    {
      value: '85K+',
      label: 'Project complete',
    },
    {
      value: '59%',
      label: 'Conversion Rate',
    },
  ]
  return (
    <div className="w-full bg-[#121212] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {stats.map((stat, index) => (
          <Fragment key={index}>
            <div className="flex flex-col items-center py-4 sm:py-0">
              <p className="text-xl sm:text-2xl font-medium">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {stat.label}
              </p>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden sm:block h-12 w-px bg-gray-700 mx-4"></div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

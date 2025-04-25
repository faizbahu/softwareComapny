
export function TestimonialCard({ quote, testimonial, image, title,position }){
  return (
    <div className="flex flex-col">
      <div className="bg-[#2C2E32] rounded-lg p-6 mb-4 max-w-[360px]">
        <h3 className="text-white text-xl font-medium mb-3">{quote}</h3>
        <p className="text-gray-300 text-sm">{testimonial}</p>
      </div>
      <div className="flex items-center ml-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </div>
        <div>
        <p className="ml-4 text-white font-semibold">{title}</p>
        <p className="ml-4 text-[#A9AFBA]">{position}</p>
        </div>
      </div>
    </div>
  )
}

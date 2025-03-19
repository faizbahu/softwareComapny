import { ArrowRight } from "lucide-react"
import riseArror from "../assets/pic-1.png"
import social from "../assets/pic-2.png"
import digital from "../assets/pic-3.png"
export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "E-mail Marketing",
      description:
        "E-mail Marketing are integral components of any organization's success. Business refers to the activities.",
        icon: (
            <img src={riseArror} alt="E-mail Marketing" width="48" height="48" />
          ),
    },
    {
      id: 2,
      title: "Social Marketing",
      description:
        "Social Marketing are integral components of any organization's success. Business refers to the activities.",
        icon: (
            <img src={social} alt="E-mail Marketing" width="48" height="48" />
          ),
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Digital Marketing are integral components of any organization's success. Business refers to the activities.",
        icon: (
            <img src={digital} alt="E-mail Marketing" width="48" height="48" />
          ),
    },
  ]

  return (
    <div className="bg-[#111112] py-16 px-4 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full border-[0.5px] border-white/10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#333437] text-[#8A8A8A] text-sm py-2 px-6 rounded-full">Our Services</div>
        </div>

        {/* Section Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">Services for Customer</h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#333437] rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(74,132,255,0.15)]"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-white text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-[#B8B8B8] mb-8 flex-grow">{service.description}</p>
              <button className="w-10 h-10 rounded-full border border-[#727272] flex items-center justify-center self-start hover:bg-[#4a84ff] hover:border-[#4a84ff] transition-colors duration-300">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center">
          <button className="cursor-pointer mt-8 bg-blue-500 hover:bg-blue-600 text-black px-8 py-3 rounded-md font-medium">
            Explore More
          </button>
        </div>
      </div>
    </div>
  )
}



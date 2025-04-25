import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Clock } from "lucide-react"
import { Navbar } from "../components/Navbar";
export default function JobDetailsPage() {
  return (
    <div>
    <Navbar />
    <main className="container mx-auto px-4 py-8 relative mt-[90px]">
        {/* Job Header */}
        <div  style={{
      background:
        "linear-gradient(180deg, rgba(20, 78, 227, 0) 0%, rgba(20, 78, 227, 1) 100%)",
    }} className="relative h-[386px] rounded-lg p-4 md:p-8 mb-32">
          <div className="max-w-3xl mx-auto">{/* Job content will be placed here */}</div>
        </div>

        {/* Job Details Card */}
        <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 max-w-3xl bg-[#2A2B36] rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Job Tags */}
            <div className="flex flex-wrap gap-4 mb-4 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-white/70" />
                <span className="text-white/70">Part time</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-white/70" />
                <span className="text-white/70">New York</span>
              </div>
            </div>

            {/* Job Title */}
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Lead UI/UX Designer</h1>

            {/* Job Description */}
            <p className="text-white/70 mb-8">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              aute irure dolor in reprehenderit in.
            </p>

            {/* Job Responsibilities */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Job Responsibilities</h2>
              <p className="text-white/70 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit laboris arcu enim urna adipiscing praesent velit
                viverra sit semper <span className="text-blue-400">lorem eu cursus velit</span> hendrerit elementum
                morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.
              </p>
            </div>

            {/* Job Requirements */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Job Requirements</h2>
              <p className="text-white/70 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit laboris arcu enim urna adipiscing praesent velit
                viverra sit semper <span className="text-blue-400">lorem eu cursus velit</span> hendrerit elementum
                morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.
              </p>

              {/* Requirements List */}
              <ol className="list-decimal pl-6 space-y-3 text-white/70">
                <li>Neque sodales ut etiam sit amet nisl purus non felis arcu ac auctor</li>
                <li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti</li>
                <li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li>
                <li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti</li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#4A84FF] hover:bg-blue-600 text-black px-6 py-3 rounded-md font-medium transition">
                Apply now
              </button>
              <button className="bg-[#CBC6C6] hover:bg-gray-700 text-black px-6 py-3 rounded-md font-medium transition">
                Back To Jobs
              </button>
            </div>
          </div>
        </div>

        {/* More Positions */}
        <div className="max-w-6xl mx-auto mt-[560px] mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">More open positions</h2>
            <button className="bg-[#2A2B36] hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm transition">
              Browse all positions
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="#"
              className="bg-[#2A2B36] hover:bg-gray-700 rounded-lg p-6 flex justify-between items-center group transition"
            >
              <h3 className="text-xl font-medium">Product Data Analyst</h3>
              <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white transition" />
            </Link>
            <Link
              href="#"
              className="bg-[#2A2B36] hover:bg-gray-700 rounded-lg p-6 flex justify-between items-center group transition"
            >
              <h3 className="text-xl font-medium">VP of Marketing</h3>
              <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white transition" />
            </Link>
          </div>
        </div>
      </main>
      </div>
  )
}

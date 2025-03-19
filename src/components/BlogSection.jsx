import { Clock, CircleUserRound  } from "lucide-react"
import Blog1 from "../assets/blog-3.png"
import Blog2 from "../assets/blog-2.png"
import Blog3 from "../assets/blog-1.png"
export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "The role of streamlining business finances.",
      
      image: Blog1,
      imageAlt: "Man and woman working together on a laptop",
      author: "Sarah Smith",
      date: "Feb 28, 2025",
      url: "#",
    },
    {
      id: 2,
      title: "Leadership Inspiring Success Stories.",
      image: Blog2,
      imageAlt: "Two people discussing work while looking at laptop and tablet",
      author: "Nicole Smith",
      date: "Feb 28, 2025",
      url: "#",
    },
    {
      id: 3,
      title: "Building a Purpose Driven Business.",
      image: Blog3,
      imageAlt: "Group of three people collaborating around a laptop",
      author: "Nicole Smith",
      date: "Feb 28, 2025",
      url: "#",
    },
  ]

  return (
    <div className="bg-[#121212] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex justify-center mb-3">
          <div className="bg-[#333437] text-white text-sm py-2 px-6 rounded-full inline-block">Latest Blog</div>
          
        </div>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center  mb-16">
          Take a look at our

          <br />
          articles & resources
        </h2>
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[850px] mx-auto">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col h-full">
              {/* Blog Image */}
              <div className="rounded-2xl overflow-hidden mb-6">
                <img src={post.image} alt={post.imageAlt} className="w-full h-64 object-cover" />
              </div>

              {/* Blog Meta */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center bg-[#24262A] text-white text-sm py-1 px-3 rounded-full">
                  <CircleUserRound  className="w-4 h-4 mr-2 text-[#4A84FF]" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center text-[#8a8a8a] text-sm">
                  <Clock className="w-4 h-4 mr-2 text-[#4A84FF]" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                
              </div>

              {/* Read More Button */}
              <div className="mt-auto">
                <a
                  href={post.url}
                  className="inline-block bg-[#4a84ff] hover:bg-[#4a84ff]/90 text-black font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"
import Logo from "../assets/Asset 8@4x.png";
export default function Footer() {
  return (
    <footer className="bg-[#2C2E32] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              {/* <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-[#2c2e32] text-xs font-bold"></span>
              </div> */}
              <img className="w-[57px]" src={Logo} alt="" />
            </div>

            <div className="space-y-4">
              <p className="text-[#b8b8b8] text-sm">Corporate Office</p>
              <p className="text-white text-lg font-medium">
                780 E 15th Floor, New
                <br />
                Tower New York, USA
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-[#b8b8b8] text-sm">Drop Us Message</p>
              <a
                href="mailto:aizflex@mail.com"
                className="text-white text-lg font-medium hover:text-[#4a84ff] transition-colors"
              >
                aizflex@mail.com
              </a>
            </div>
          </div>

          {/* Main Pages */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium mb-6">Main Pages</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors">
                  Services Pages
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors">
                  project Page
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors">
                  Blog Page
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors">
                  Contact Page
                </a>
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium mb-6">Utility Pages</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors">
                  Start Here
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors">
                  404 Page
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors">
                  Password Safe
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium mb-6">Subscribe</h3>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-[#414141] border-none rounded-md py-3 px-4 text-white placeholder-[#7f7f7f] focus:outline-none focus:ring-1 focus:ring-[#4a84ff]"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent p-1 hover:bg-[#414141] rounded-md transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>

            <p className="text-[#b8b8b8] text-sm">Enter your email address to Join our newsletter subscription.</p>

            <div className="flex space-x-8 pt-2">
              <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#b8b8b8] hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#414141] text-center">
          <p className="text-[#b8b8b8] text-sm">Copyright ©</p>
        </div>
      </div>
    </footer>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Logo } from "@/components/layout/logo"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#333333] pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Contact Info */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#f0cc22] mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:contact@gradify.ai" className="text-sm text-gray-400 hover:text-[#f0cc22]">
                  contact@gradify.ai
                </a>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#f0cc22] mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+48272663132" className="text-sm text-gray-400 hover:text-[#f0cc22]">
                  +48 27 266 31 32
                </a>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#f0cc22] mr-3 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Twarda 18/20, 10G</p>
                  <p className="text-sm text-gray-400">Warsaw, Poland</p>
                </div>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#f0cc22] mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M7 15h0M2 9.5h20"></path>
                </svg>
                <p className="text-sm text-gray-400">VAT EU: PL5252802041</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:ml-auto">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-sm text-gray-400 hover:text-[#f0cc22]">
                Home
              </Link>
              <Link href="/solutions" className="block text-sm text-gray-400 hover:text-[#f0cc22]">
                Solutions
              </Link>
              <Link href="/about-us" className="block text-sm text-gray-400 hover:text-[#f0cc22]">
                About Us
              </Link>
            </nav>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h4>
            <div className="mb-4">
              <label htmlFor="footer-email" className="block text-sm text-gray-400 mb-2">
                Email*
              </label>
              <input
                type="email"
                id="footer-email"
                placeholder="Your email address"
                className="w-full bg-[#141416] border border-[#333333] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#f0cc22]"
              />
            </div>
            <button
              type="button"
              className="bg-[#f0cc22] hover:bg-[#fdbf2d] text-black px-6 py-2 rounded-md font-medium"
            >
              Submit
            </button>

            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Follow Us On:</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center hover:bg-[#f0cc22] transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center hover:bg-[#f0cc22] transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center hover:bg-[#f0cc22] transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333333] pt-6">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Gradify.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 
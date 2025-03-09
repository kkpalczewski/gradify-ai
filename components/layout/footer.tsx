import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { ContactInfo } from "@/components/sections/contact/contact-info";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#333333] pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Contact Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1 md:ml-auto">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <nav className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-[#f0cc22]"
              >
                Home
              </Link>
              <Link
                href="/solutions"
                className="text-sm text-gray-400 hover:text-[#f0cc22]"
              >
                Solutions
              </Link>
              <Link
                href="/about-us"
                className="text-sm text-gray-400 hover:text-[#f0cc22]"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1 md:ml-auto">
            <h4 className="text-lg font-medium mb-4">Follow Us On:</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/gradifyai"
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
                href="https://www.linkedin.com/company/gradify-ai/"
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
                href="https://www.instagram.com/gradify.ai"
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#333333]">
        <div className="container mx-auto px-6 md:px-12 pt-6">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} gradify.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

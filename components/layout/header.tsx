"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/layout/logo"
import { useEffect, useRef } from "react"

export function Header() {
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  
  const getActivePage = () => {
    if (pathname === "/") return "home"
    if (pathname === "/about-us") return "about-us"
    if (pathname === "/solutions") return "solutions"
    return "home"
  }

  const toggleMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('hidden')
    }
  }

  // Close menu when route changes
  useEffect(() => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.add('hidden')
    }
  }, [pathname])

  return (
    <header className="bg-[#1a1a1a] border-b border-[#333333]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium ${
                getActivePage() === "home" ? "text-[#f0cc22]" : "text-gray-400 hover:text-[#f0cc22]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className={`text-sm font-medium ${
                getActivePage() === "solutions" ? "text-[#f0cc22]" : "text-gray-400 hover:text-[#f0cc22]"
              }`}
            >
              Solutions
            </Link>
            <Link
              href="/about-us"
              className={`text-sm font-medium ${
                getActivePage() === "about-us" ? "text-[#f0cc22]" : "text-gray-400 hover:text-[#f0cc22]"
              }`}
            >
              About Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-400 hover:text-[#f0cc22]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={mobileMenuRef}
          className="md:hidden hidden transition-all duration-300 ease-in-out"
        >
          <nav className="py-4 space-y-4">
            <Link
              href="/"
              className={`block text-sm font-medium ${
                getActivePage() === "home" ? "text-[#f0cc22]" : "text-gray-400 hover:text-[#f0cc22]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className={`block text-sm font-medium ${
                getActivePage() === "solutions" ? "text-[#f0cc22]" : "text-gray-400 hover:text-[#f0cc22]"
              }`}
            >
              Solutions
            </Link>
            <Link
              href="/about-us"
              className={`block text-sm font-medium ${
                getActivePage() === "about-us" ? "text-[#f0cc22]" : "text-gray-400 hover:text-[#f0cc22]"
              }`}
            >
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 
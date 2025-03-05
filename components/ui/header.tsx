import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/ui/logo"

export function Header() {
  const pathname = usePathname()
  
  const getActivePage = () => {
    if (pathname === "/") return "home"
    if (pathname === "/about-us") return "about-us"
    if (pathname === "/solutions") return "solutions"
    return "home"
  }

  return (
    <header className="bg-black border-b border-[#333333]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <Logo />
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
        </div>
      </div>
    </header>
  )
} 
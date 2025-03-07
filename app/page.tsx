import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/sections/contact/contact-form"
import { Testimonials } from "@/components/sections/home/testimonials"
import { BusinessTech } from "@/components/sections/home/business-tech"
import { TechAgnostic } from "@/components/sections/home/tech-agnostic"
import { ContactInfo } from "@/components/sections/contact/contact-info"

export default function Home() {
  const welcomeVideoUrl = "https://player.vimeo.com/video/1063530782?h=d209445abd&background=1&autoplay=1&loop=1&byline=0&title=0&controls=0&muted=1&playsinline=1"

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <section className="relative bg-[#141416] py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src={welcomeVideoUrl}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
            allow="playsinline; autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              minWidth: '150vw', // width is not scalling to 100% of the screen - do this hack is needed to make the video full screen
              minHeight: '150vh' // height is not scalling to 100% of the screen - do this hack is needed to make the video full screen
            }}
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Robust
                <br />
                Data Science
              </h1>
              <p className="text-[#f0cc22] mb-8">
                We build data science solutions with
                <br />
                start-ups and enterprises.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#f0cc22] hover:bg-[#fdbf2d] text-black px-6 py-2 rounded-md font-medium"
                >
                  Contact Us
                </Link>
                <Link
                  href="/solutions"
                  className="border border-white hover:border-[#f0cc22] hover:text-[#f0cc22] px-6 py-2 rounded-md font-medium"
                >
                  Our solutions
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Business Oriented Tech Section */}
      <BusinessTech />

      {/* Tech Agnostic Section */}
      <TechAgnostic clickable />

      {/* Contact Us Section */}
      <section className="py-16 bg-[#1a1a1a]" id="contact">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  )
}


import Link from "next/link";
import { Testimonials } from "@/components/sections/home/testimonials";
import { BusinessTech } from "@/components/sections/home/business-tech";
import { TechAgnostic } from "@/components/sections/home/tech-agnostic";

export default function Home() {
  const welcomeVideoUrl =
    "https://player.vimeo.com/video/1064073899?h=9a66957aef&background=1&autoplay=1&loop=1&byline=0&title=0&controls=0&muted=1";

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <section className="relative bg-[#141416] py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src={welcomeVideoUrl}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              minWidth: "150vw", // width is not scalling to 100% of the screen - do this hack is needed to make the video full screen
              minHeight: "150vh", // height is not scalling to 100% of the screen - do this hack is needed to make the video full screen
            }}
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative">
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
    </main>
  );
}

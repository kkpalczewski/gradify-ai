import Image from "next/image"
import Link from "next/link"

export function TechAgnostic() {
  // Array of tech logos to display in the circle
  const techLogos = Array(15).fill("/placeholder.svg?height=40&width=40")

  return (
    <section className="py-16 bg-[#1a1a1a] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
              <h2 className="text-2xl font-bold mb-2">We are tech</h2>
              <p className="text-2xl font-bold">agnostic</p>
            </div>

            {/* Circle of tech logos */}
            <div className="absolute inset-0 z-10">
              <div className="relative w-full h-full">
                {techLogos.map((logo, index) => {
                  // Calculate position around the circle
                  const angle = (index / techLogos.length) * 2 * Math.PI
                  const radius = 120 // Adjust based on circle size
                  const left = 50 + radius * Math.cos(angle)
                  const top = 50 + radius * Math.sin(angle)

                  return (
                    <div
                      key={index}
                      className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                      }}
                    >
                      <Image
                        src={logo || "/placeholder.svg"}
                        alt={`Tech Logo ${index + 1}`}
                        width={40}
                        height={40}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Yellow circle border */}
            <div className="absolute inset-0 border-2 border-[#f0cc22] rounded-full"></div>

            {/* Yellow dots/accents */}
            <div className="absolute bottom-0 right-0 w-24 h-12">
              <Image
                src="/placeholder.svg?height=48&width=96"
                alt="Yellow Accent"
                width={96}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <Link
            href="/technologies"
            className="bg-[#f0cc22] hover:bg-[#fdbf2d] text-black px-6 py-2 rounded-md font-medium"
          >
            Learn more
          </Link>
        </div>
      </div>

      {/* Background stars/dots */}
      <div className="absolute inset-0 opacity-30">
        <Image src="/placeholder.svg?height=800&width=1600" alt="Star Background" fill className="object-cover" />
      </div>
    </section>
  )
}


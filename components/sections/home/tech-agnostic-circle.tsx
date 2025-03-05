import Image from "next/image"

export function TechAgnosticCircle() {
  // Array of tech logos to display in the circle
  const techLogos = Array(15).fill("/placeholder.svg?height=40&width=40")

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
        <h2 className="text-2xl font-bold mb-2 text-[#f0cc22]">We are tech</h2>
        <p className="text-2xl font-bold text-[#f0cc22]">agnostic</p>
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
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import { getTechLogos } from "./tech-logos"

interface CircleConfig {
  logos: string[]
  containerSize: {
    mobile: string
    desktop: string
  }
  imageSize: {
    mobile: string
    desktop: string
  }
}

interface TechAgnosticProps {
  clickable?: boolean
}

export function TechAgnostic({ clickable = false }: TechAgnosticProps) {
  const allLogos = getTechLogos()
  const logosPerCircle = Math.ceil(allLogos.length / 3)
  const innerLogos = allLogos.slice(0, logosPerCircle)
  const middleLogos = allLogos.slice(logosPerCircle, logosPerCircle * 2)
  const outerLogos = allLogos.slice(logosPerCircle * 2)

  const circleConfigs: CircleConfig[] = [
    {
      logos: innerLogos,
      containerSize: { mobile: "w-7 h-7", desktop: "sm:w-9 sm:h-9" },
      imageSize: { mobile: "w-6 h-6", desktop: "sm:w-8 sm:h-8" }
    },
    {
      logos: middleLogos,
      containerSize: { mobile: "w-7 h-7", desktop: "sm:w-9 sm:h-9" },
      imageSize: { mobile: "w-6 h-6", desktop: "sm:w-8 sm:h-8" }
    },
    {
      logos: outerLogos,
      containerSize: { mobile: "w-7 h-7", desktop: "sm:w-9 sm:h-9" },
      imageSize: { mobile: "w-6 h-6", desktop: "sm:w-8 sm:h-8" }
    }
  ]

  const renderCircle = (config: CircleConfig, circleIndex: number) => {
    const radius = circleIndex === 0 ? 30 : circleIndex === 1 ? 40 : 50
    const rotationOffset = (Math.PI / 7) + (circleIndex * 0.5)

    return config.logos.map((logo, index) => {
      const angle = (index / config.logos.length) * 2 * Math.PI + rotationOffset
      const left = 50 + radius * Math.cos(angle)
      const top = 50 + radius * Math.sin(angle)

      return (
        <div
          key={`circle-${circleIndex}-${index}`}
          className={`absolute ${config.containerSize.mobile} ${config.containerSize.desktop} bg-white rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 overflow-hidden`}
          style={{ left: `${left}%`, top: `${top}%` }}
        >
          <Image
            src={logo}
            alt={`Tech Logo ${index + 1}`}
            width={40}
            height={40}
            className={`${config.imageSize.mobile} ${config.imageSize.desktop} object-cover`}
          />
        </div>
      )
    })
  }

  const content = (
    <div className={`h-full w-full min-h-[350px] bg-[#1a1a1a] relative overflow-hidden ${clickable ? 'cursor-pointer hover:bg-[#1f1f1f] transition-colors' : ''}`}>
      <div className="absolute inset-0 opacity-30">
        <iframe
          src="https://player.vimeo.com/video/1063532026?h=3bf80432e2&background=1&autoplay=1&loop=1&byline=0&title=0&controls=0&muted=1&playsinline=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ minWidth: '150vw', minHeight: '150vh' }}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
            <h2 className="text-l sm:text-xl font-bold mb-1">We are tech</h2>
            <p className="text-l sm:text-xl font-bold">agnostic</p>
          </div>
          <div className="absolute inset-0 z-10">
            {circleConfigs.map((config, index) => renderCircle(config, index))}
          </div>
        </div>
      </div>
    </div>
  )

  if (clickable) {
    return (
      <Link href="/about-us#tech-agnostic" className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}


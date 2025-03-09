import Image from "next/image"
import Link from "next/link"
import { TechAgnostic } from "@/components/sections/home/tech-agnostic"

interface ContentTileProps {
  title?: string
  content: string[]
  image: {
    src: string
    alt: string
    aspectRatio?: string
  }
  isReversed?: boolean
  isTechAgnostic?: boolean
  buttonText?: string
  buttonLink?: string
  id?: string
}

export function ContentTile({
  title,
  content,
  image,
  isReversed = false,
  isTechAgnostic = false,
  buttonText,
  buttonLink,
  id,
}: ContentTileProps) {
  const textContent = (
    <div className="p-8 md:col-span-8">
      {title && (
        <h2 className="text-3xl font-bold text-[#f0cc22] mb-6">{title}</h2>
      )}
      <div className="space-y-4 text-sm">
        {content.map((paragraph, index) => (
          <p
            key={index}
            className={paragraph.includes("tech agnostic") ? "text-[#f0cc22]" : ""}
          >
            {paragraph}
          </p>
        ))}
      </div>
      {buttonText && buttonLink && (
        <div className="mt-6">
          <Link
            href={buttonLink}
            className="bg-[#f0cc22] hover:bg-[#fdbf2d] text-black px-6 py-2 rounded-md font-medium inline-block"
          >
            {buttonText}
          </Link>
        </div>
      )}
    </div>
  )

  const visualContent = (
    <div className="bg-white rounded-lg flex items-center justify-center w-full h-full md:col-span-4">
      {isTechAgnostic ? (
        <div className="relative w-full h-full">
          <TechAgnostic />
        </div>
      ) : (
        <div className={`relative w-full h-full ${image.aspectRatio || 'aspect-[1]'}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  )

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#141416] rounded-lg overflow-hidden">
          {isReversed ? (
            <>
              {visualContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {visualContent}
            </>
          )}
        </div>
      </div>
    </section>
  )
} 
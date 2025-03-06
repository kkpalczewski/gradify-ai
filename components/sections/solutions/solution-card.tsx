import Image from "next/image"
import Link from "next/link"

interface SolutionProps {
  solution: {
    id: string
    title: string
    image: string
    description: string
    contactLabel: string
    formInstructions: string,
    sampleRecommendationsPdf: string
  }
  index: number
  totalSolutions: number
}

export function SolutionCard({ solution, index, totalSolutions }: SolutionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-[#141416] rounded-lg overflow-hidden">
      {/* Image Column */}
      <div className="md:col-span-2 bg-white h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={solution.image || "/placeholder.svg"}
            alt={solution.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 16.67vw"
          />
        </div>
      </div>

      {/* Content Column */}
      <div className="md:col-span-7 p-4 flex flex-col">
        <h3 className="text-xl font-bold text-[#f0cc22] mb-2">{solution.title}</h3>
        <p className="text-sm text-white mb-4 flex-grow" dangerouslySetInnerHTML={{ __html: solution.description }} />
      </div>

      {/* Action Column */}
      <div className="md:col-span-3 p-4 flex flex-col justify-between">
        <div className="space-y-4">
          <Link
            href={`#contact`}
            className="bg-[#f0cc22] hover:bg-[#fdbf2d] text-black text-center px-4 py-2 rounded-md font-medium text-sm block"
          >
            {solution.contactLabel}
          </Link>

          <p className="text-xs text-gray-400">{solution.formInstructions}</p>
        </div>

        {index !== totalSolutions - 1 ? (
          <Link
            href={solution.sampleRecommendationsPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#333333] hover:border-[#f0cc22] hover:text-[#f0cc22] text-white text-center px-4 py-2 rounded-md text-sm mt-4 block"
          >
            Sample Recommendations
          </Link>
        ) : (
          <div className="h-[42px]" />
        )}
      </div>
    </div>
  )
}


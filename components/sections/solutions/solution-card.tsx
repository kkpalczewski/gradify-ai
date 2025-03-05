import Image from "next/image"
import Link from "next/link"

interface SolutionProps {
  solution: {
    id: string
    title: string
    image: string
    description: string
    contactLabel: string
    formInstructions: string
  }
  index: number
}

export function SolutionCard({ solution, index }: SolutionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-[#141416] rounded-lg overflow-hidden">
      {/* Image Column */}
      <div className="md:col-span-3 bg-white p-4 flex items-center justify-center">
        <Image
          src={solution.image || "/placeholder.svg"}
          alt={solution.title}
          width={200}
          height={200}
          className="w-full max-w-[160px] h-auto object-contain"
        />
      </div>

      {/* Content Column */}
      <div className="md:col-span-6 p-6">
        <h3 className="text-xl font-bold text-[#f0cc22] mb-4">{solution.title}</h3>
        <p className="text-sm text-white mb-6">{solution.description}</p>
      </div>

      {/* Action Column */}
      <div className="md:col-span-3 p-6 flex flex-col justify-center space-y-6">
        <Link
          href={`#contact`}
          className="bg-[#f0cc22] hover:bg-[#fdbf2d] text-black text-center px-4 py-2 rounded-md font-medium text-sm"
        >
          {solution.contactLabel}
        </Link>

        <p className="text-xs text-gray-400">{solution.formInstructions}</p>

        <button className="border border-[#333333] hover:border-[#f0cc22] hover:text-[#f0cc22] text-white text-center px-4 py-2 rounded-md text-sm">
          Sample Recommendations
        </button>
      </div>
    </div>
  )
}


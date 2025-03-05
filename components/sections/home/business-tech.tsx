import Link from "next/link"
import Image from "next/image"

export function BusinessTech() {
  return (
    <section className="py-4 bg-[#1a1a1a]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Business oriented tech</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-lg">
          {/* Left Column - Yellow Background */}
          <div 
            className="bg-[#f0cc22] p-8 md:p-12 text-white relative bg-cover bg-right flex flex-col"
            style={{ backgroundImage: 'url("/business_oriented_tech/left.jpg")' }}
          >
            <div className="max-w-md mx-auto relative z-10 flex flex-col flex-grow">
              <p className="mb-6 font-medium">
                We execute advanced data science and data engineering projects for startups and enterprises.
              </p>
              <p className="mb-6">
                Depending on our customers specific needs, we partner with them in different forms:
              </p>
              <ul className="space-y-2 mb-8">
                <li>• Executive end-to-end projects</li>
                <li>• Team augmentation</li>
                <li>• Training, data strategy, and use case ideation</li>
              </ul>
              <div className="mt-auto flex justify-center">
                <Link
                  href="/solutions"
                  className="inline-block bg-[#f0cc22] text-black px-6 py-2 rounded-md hover:bg-[#fdbf2d] border-2 border-white"
                >
                  About Our Solutions
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 bg-[#141416] opacity-50" />
          </div>

          {/* Right Column - Dark Background */}
          <div 
            className="bg-[#141416] p-8 md:p-12 relative bg-cover bg-left flex flex-col"
            style={{ backgroundImage: 'url("/business_oriented_tech/right.jpg")' }}
          >
            <div className="max-w-md mx-auto relative z-10 flex flex-col flex-grow">
              <p className="mb-6">
                gradify.ai was designed to enable our partners to get maximum value out of accessible data in the
                organization.
              </p>
              <p className="mb-8">
                We've created a business-oriented technology setup with target-specific solutions and a department of
                data scientists and engineers that deliver work of a quality that we're proud of, and that our clients
                appreciate.
              </p>
              <div className="mt-auto flex justify-center">
                <Link
                  href="/about-us"
                  className="inline-block bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 border-2 border-white"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 bg-[#141416] opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}


import Image from "next/image"
import Link from "next/link"

export function Testimonials() {
  const testimonials = [
    {
      logo: "/customers/galvanize/logo.jpg",
      logoAlt: "Galvanize Logo",
      person: "Jason Strand", 
      personImage: "/customers/galvanize/jason_strand.jpg",
      title: "Director of Enterprise Engagement @ Galvanize, Inc",
      quote:
        " I can confidently recommend gradify.ai because of my experience working with founder Krzysztof Palczewski in the field of professional data science learning and development. ... ",
      bgColor: "bg-[#f0cc22]",
      pdfLink: "/customers/galvanize/testimonials.pdf"
    },
    {
      logo: "/customers/deepsense_ai/logo.jpg",
      logoAlt: "DeepSense.ai Logo",
      person: "Robert Bogucki",
      personImage: "/customers/deepsense_ai/robert_bogucki.jpg",
      title: "Chief Technology Officer @ deepsense.ai",
      quote:
        " We needed help with one of our Data Science Training projects and gradify.ai was able to fill the gap perfectly. The collaboration was smooth and productive from day one. ... ",
      bgColor: "bg-white",
      pdfLink: "/customers/deepsense_ai/testimonials.pdf"
    },
    {
      logo: "/customers/sellectra/logo.jpg",
      logoAlt: "Sellectra Logo",
      person: "Peter Ratynski",
      personImage: "/customers/sellectra/peter_ratynski.jpg",
      title: "Managing Director @ sellectra GmbH",
      quote:
        " gradify.ai successfully carried us through the creation of our company's data strategy and its implementation in the cloud. ... ",
      bgColor: "bg-[#f0cc22]",
      pdfLink: "/customers/sellectra/testimonials.pdf"
    },
  ]

  return (
    <section className="py-8">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Our customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.bgColor} p-8 relative flex flex-col ${index === 0 ? "rounded-t-lg md:rounded-l-lg md:rounded-t-none" : index === testimonials.length - 1 ? "rounded-b-lg md:rounded-r-lg md:rounded-b-none" : ""}`}
            >
              <div className="flex flex-col flex-grow">
                <div className="h-20 mb-6 flex items-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-[#f0cc22]">
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.logoAlt}
                      width={150}
                      height={80}
                      className="h-auto max-h-16 w-auto object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 mr-4">
                    <div className="absolute inset-0 rounded-full bg-white p-0.5 border-2 border-[#f0cc22]">
                      <div className="absolute inset-0.5 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.personImage}
                          alt={testimonial.person}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className={`font-medium ${index === 1 ? "text-black" : "text-black"}`}>{testimonial.person}</h4>
                    <p className={`text-sm ${index === 1 ? "text-gray-700" : "text-gray-800"}`}>{testimonial.title}</p>
                  </div>
                </div>
                <p className={`text-sm mb-6 text-left ${index === 1 ? "text-black" : "text-black"}`}>"{testimonial.quote}"</p>
              </div>
              <div className="flex justify-center">
                <Link
                  href={testimonial.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium px-4 py-2 rounded-md border-2 ${index === 1 ? "bg-[#f0cc22] text-black border-[#f0cc22] hover:bg-[#fdbf2d]" : "bg-white text-black border-white hover:bg-gray-50"} transition-colors`}
                >
                  Read all
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


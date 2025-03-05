import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/sections/contact/contact-form"
import { ContactInfo } from "@/components/sections/contact/contact-info"
import { SolutionCard } from "@/components/sections/solutions/solution-card"

export default function SolutionsPage() {
  // Solution cards data
  const solutions = [
    {
      id: "training-strategy",
      title: "Training and Strategy",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "Building strong bases for your data competencies and your company's overall data strategy is key to creating a data-driven mindset. We assist our partners in establishing best practice project management, reliable data engineering and state-of-the-art data science. Our team has documented experience in building analytics teams. Let's take the first step into leveraging your data potential together!",
      contactLabel: "Contact Us about Training and Strategy",
      formInstructions:
        'To reduce the time it takes us to get back to you, include "Training and Strategy" in the Message field in the contact form below.',
    },
    {
      id: "team-augmentation",
      title: "Team Augmentation",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "Our company's teams consist of multiple specialists from analysts to DevOps developers. We can join your teams such as data scientists or data engineers. We can be contracted as PoC or MVP initiators, or provide temporary support in the form of consultancy when additional expertise in a specific domain is needed. Based on your company's competencies, we can provide domain experts and support the development of frameworks that we've developed for our clients. We are constantly expanding gradify.ai knowledge base.",
      contactLabel: "Contact Us about Team Augmentation",
      formInstructions:
        'To reduce the time it takes us to get back to you, include "Team Augmentation" in the Message field in the contact form below.',
    },
    {
      id: "end-to-end-projects",
      title: "End-to-end Projects",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "We have multiple project managers, data scientists, data engineers, and DevOps processes, we have established processes, which means that we also have the full control and original for project-specific additional aspects of our work.",
      contactLabel: "Contact Us about End-to-end projects",
      formInstructions:
        'To reduce the time it takes us to get back to you, include "End-to-end Projects" in the Message field in the contact form below.',
    },
    {
      id: "non-standard-projects",
      title: "Non-standard Projects",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "Want to bring to life unexpected business or idea idea or just make better use of your data assets? We run workshops based on your needs in specific project areas or talk about specific challenges where partners significant.",
      contactLabel: "Contact Us about Non-standard Projects",
      formInstructions:
        'To reduce the time it takes us to get back to you, include "Non-standard Projects" in the Message field in the contact form below.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <section className="relative bg-[#141416] py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Background Pattern"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center">Let's grow together</h1>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={solution.id} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

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


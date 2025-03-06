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
      image: "/solutions/training_and_strategy.png",
      description:
        "Building strong bases for your data competencies and your company's overall data strategy is key to creating a data-driven company mindset.<br />We assist our partners in establishing best practice project management, reliable data engineering and state-of-the-art data science. Our team has documented experience in building analytics teams.<br />Let's take the first step into leveraging your data potential together!",
      contactLabel: "Contact Us about Training and Strategy",
      formInstructions:
        'To reduce the time it takes us to get back to you, include "Training and Strategy" in the Message field in the contact form below.',
      sampleRecommendationsPdf: "/customers/galvanize/testimonials.pdf"
    },
    {
      id: "team-augmentation",
      title: "Team Augmentation",
      image:  "/solutions/team_augmentation.png",
      description:
        "On-site company's teams consist of multiple types of experts, from analysts to DevOps developers. Professions such as data scientists or data engineers are often treated as PoC or MVP initiatives; in such cases, temporary support in the form of team augmentation is needed. <br/>We fill in your company's competency gaps with data domain experts and support them with frameworks that we've developed through our constantly expanding gradify.ai knowledge base. ",
      contactLabel: "Contact Us about Team Augmentation",
      formInstructions:
        'To reduce the time it takes us to get back to you, include "Team Augmentation" in the Message field in the contact form below.',
      sampleRecommendationsPdf: "/customers/deepsense_ai/testimonials.pdf"
    },
    {
      id: "end-to-end-projects",
      title: "End-to-end Projects",
      image:  "/solutions/end_to_end_projects.png",
      description:
        "We execute projects which require multiple competencies with roles such as project managers, analysts, scrum masters, data scientists, data engineers, DevOps and full-stack engineers.<br />We have already set up all the initial project processes, which reduces initial time and costs. We also have the full range of needed competencies at our disposal for data projects, and in cases where specific additional resources are needed, we make use of our wide network of contractors.",
      contactLabel: "Contact Us about End-to-end projects",
      formInstructions:
        'To reduce the time it takes us to get back to you, include "End-to-end Projects" in the Message field in the contact form below.',
      sampleRecommendationsPdf: "/customers/sellectra/testimonials.pdf"
    },
    {
      id: "non-standard-projects",
      title: "Non-standard Projects",
      image:  "/solutions/non_standard_projects.png",
      description:
        "A creative mess sometimes brings to life unexpected innovations. If you have an unorthodox idea or just have a feeling that you could make use of your data in a specific way, contact us.  <br />In many cases, our ideation workshops based on initial partner ideas have resulted in specific project scopes; in other cases, information about specific data limitations has saved our partners significant time and expenditures. ",
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
              <SolutionCard 
                key={solution.id} 
                solution={solution} 
                index={index} 
                totalSolutions={solutions.length}
              />
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


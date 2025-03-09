import Image from "next/image";
import { ContentTile } from "@/components/sections/about-us/content-tile";

const contentTiles = [
  {
    title: "Our Story",
    content: [
      "gradify.ai is a data science boutique, founded to help companies innovate with their data. Simply.",
      'The word "gradify" is a shortened version of "gradient," which is based on the mathematical formula for ML computing. Nowadays, gradient descent optimization is the most popular algorithm for neural networks and deep learning expertise. (Our company\'s name is literally "Optimal Solution," but we also realized that!)',
      "We are a part of something much bigger: the global community and open-source tools which have made data science and data engineering accessible to the majority of companies. It's time now to get back as much to promote what we've learned and to share our knowledge with others. We are passionate regarding data, and we realize that one has to have a comprehensive understanding of data points.",
      "We come from a rich tech of life: we were creative and data scientists, managers, and entrepreneurs.",
      'We also develop our own "frameworks," which are basically knowledge of our employees and external contractors. Speaking of contractors, we have a side network of highly-regarded and well-known experts in data science and ML.',
    ],
    image: {
      src: "/about_us/our_story.avif",
      alt: "Gurl Illustration",
    },
    isReversed: true,
  },
  {
    content: [
      "We are tech agnostic, because we build solutions based on our partners' needs, not based on our technological knowledge for our team.",
      "That that we have started to develop tools that, what is efficient and what type of technology most often works, but we obviously every project individually. We have a lot of technological and technological tools, experience to change or cost of change management.",
      "In practice, our approach and system knowledge, so if there are specific needs for a project, we can easily find the right people for the job. We have a network of the issue and source contractors from our network or hire creative, professional solutions.",
      "Agnostic approach also means that we try to stay up-to-date with professional ready team source solutions and external vendors (e.g., cloud providers) so that we can enhance projects with the current best practices.",
    ],
    image: {
      src: "",
      alt: "Tech Agnostic",
    },
    isTechAgnostic: true,
    buttonText: "Contact us if you want to learn more",
    buttonLink: "#contact",
    id: "tech-agnostic",
  },
  {
    title: "Want to join or partner with us?",
    content: [
      "We are constantly striving to be ahead of the data world, and we are open to sharing our experience, as well as learning from others.",
      "We have data science labs and individuals that have specific needs for industry experts to contact us.",
      "We're also constantly developing our network of external contractors so that we can be absolutely technology independent in projects for our clients. Thus, if you're a data scientist, data engineer, data engineering or data visualization are welcome to contact us.",
      "Lastly, if you're an industry expert or ambitious almost-intern and you have a strong feeling that you would be a good fit or partner, you are more than welcome to contact us. We are always looking for talented individuals for temporary or long-term cooperation.",
      "Providing our clients professional, valuable services for our clients is always our top priority. To help serve clients, we are passionate about our work and we are constantly learning and creating with other passionate, talented organizations and individuals.",
      "Think big, act bigger.",
    ],
    image: {
      src: "/about_us/want_to_partner_with_us.avif",
      alt: "White Chair",
    },
    isReversed: true,
    buttonText: "Contact us if you want to create together",
    buttonLink: "#contact",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Our Mission Section */}
      <section className="relative bg-[#141416] py-16">
        {/* Background image container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/thumb.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-6 md:px-12  z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="space-y-6 md:col-span-8">
              <h1 className="text-4xl md:text-5xl font-bold text-[#f0cc22]">
                Our Mission
              </h1>
              <div className="space-y-4">
                <p className="text-lg">
                  Every day, we strive to act, work and deliver in such a way
                  that we can be proud of the people and professionals we are.
                </p>
                <p className="text-lg">
                  We want to build solutions which bring tangible business value
                  for our partners, based on data.
                </p>
                <p className="text-lg">
                  We provide solutions that we truly believe in.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-full md:col-span-4">
              <div className="relative w-[200px] h-[300px] mx-auto">
                <div className="absolute inset-0 rounded-lg overflow-hidden border-2 border-[#f0cc22]">
                  <Image
                    src="/about_us/founder_photo.avif"
                    alt="Krzysztof Palczewski"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#141416] p-1 rounded-lg shadow-lg border border-[#f0cc22] w-[120%]">
                  <p className="font-medium text-lg text-center">
                    Krzysztof Palczewski
                  </p>
                  <p className="text-sm text-gray-300 flex items-center justify-center gap-2 mt-1">
                    <a
                      href="https://www.linkedin.com/in/k-palczewski/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0077b5] transition-colors flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      Founder & CEO
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tiles */}
      {contentTiles.map((tile, index) => (
        <ContentTile key={index} {...tile} />
      ))}

      {/* Acknowledgements Section */}
      <section className="py-8 bg-[#141416]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-[#f0cc22] mb-4">
            Acknowledgements
          </h2>
          <p className="text-sm">
            Big thanks to Ania Bui for the logo.
            <br />
            You can check out Ania's work at{" "}
            <a
              href="https://anibui.com"
              className="text-[#f0cc22] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              aniabui.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

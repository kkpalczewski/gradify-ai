import Image from "next/image"

export function ContactInfo() {
  return (
    <div>
      <div className="bg-[#f0cc22] rounded-md overflow-hidden h-64 mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.869456789012!2d21.000000000000004!3d52.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccf3e65d4f8f%3A0x5f0d5f0d5f0d5f0d!2sTwarda%2018%2C%2000-112%20Warszawa!5e0!3m2!1sen!2spl!4v1647000000000!5m2!1sen!2spl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-start">
          <div className="w-6 h-6 mt-1 mr-3 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f0cc22"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div>
            <a href="mailto:contact@gradify.ai" className="text-[#f0cc22] hover:underline">
              contact@gradify.ai
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-6 h-6 mt-1 mr-3 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f0cc22"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div>
            <a href="tel:+48272663132" className="text-white hover:text-[#f0cc22]">
              +48 27 266 31 32
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-6 h-6 mt-1 mr-3 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f0cc22"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div>
            <p className="text-white">Twarda 18/20, 10G</p>
            <p className="text-white">Warsaw, Poland</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-6 h-6 mt-1 mr-3 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f0cc22"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="M7 15h0M2 9.5h20"></path>
            </svg>
          </div>
          <div>
            <p className="text-white">VAT EU: PL5252802041</p>
          </div>
        </div>
      </div>
    </div>
  )
}


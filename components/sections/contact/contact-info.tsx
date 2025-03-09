export function ContactInfo() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="space-y-3">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-[#f0cc22] mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a
              href="mailto:contact@gradify.ai"
              className="text-sm text-gray-400 hover:text-[#f0cc22]"
            >
              contact@gradify.ai
            </a>
          </div>

          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-[#f0cc22] mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <a
              href="tel:+48272663132"
              className="text-sm text-gray-400 hover:text-[#f0cc22]"
            >
              +48 27 266 31 32
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-[#f0cc22] mr-3 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <p className="text-sm text-gray-400">
                Twarda 18, 00-112, Warsaw, Poland
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-[#f0cc22] mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="M7 15h0M2 9.5h20"></path>
            </svg>
            <p className="text-sm text-gray-400">VAT EU: PL5252802041</p>
          </div>
        </div>
      </div>
    </div>
  );
}

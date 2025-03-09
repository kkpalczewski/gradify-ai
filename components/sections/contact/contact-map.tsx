export function ContactMap() {
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
    </div>
  )
}


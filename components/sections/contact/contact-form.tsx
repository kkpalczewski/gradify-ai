"use client"

import type React from "react"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#141416] border border-[#333333] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#f0cc22]"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm text-gray-400 mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-[#141416] border border-[#333333] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#f0cc22]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#141416] border border-[#333333] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#f0cc22]"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#141416] border border-[#333333] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#f0cc22]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Let us know what you are looking for and how we can help you."
          className="w-full bg-[#141416] border border-[#333333] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#f0cc22]"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#f0cc22] hover:bg-[#fdbf2d] text-black font-medium py-3 rounded-md transition-colors"
      >
        Submit
      </button>
    </form>
  )
}


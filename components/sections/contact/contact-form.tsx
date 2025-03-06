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
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!'
        })
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.type && (
        <div className={`p-4 rounded-md ${
          status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
        }`}>
          {status.message}
        </div>
      )}
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
        disabled={isSubmitting}
        className="w-full bg-[#f0cc22] hover:bg-[#fdbf2d] text-black font-medium py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  )
}


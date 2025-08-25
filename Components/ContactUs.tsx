
"use client"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (data.success) {
        setStatus( data.message)
        setFormData({ name: "", email: "", company: "", budget: "", message: "" }) 
      } else {
        setStatus(data.message)
      }
      console.log(data)
    } catch (err) {
      setStatus(" Something went wrong.")
    }
  }

  return (
    <section className="py-16 bg-white/50 backdrop-blur-md rounded-xl shadow-2xl max-w-3xl mx-auto px-6" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Let’s build an awesome project together!
      </h2>

      <form className="space-y-8" onSubmit={handleSubmit}>
   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              required
              className="mt-1 w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="mt-1 w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company name"
              className="mt-1 w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Budget Range
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="In USD"
              className="mt-1 w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type here..."
            
            className="mt-1 w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
          />
        </div>

        
        <div className="pt-4">
          <button
            type="submit"
            className="bg-[#176199] text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Send
          </button>
        </div>
      </form>

     
      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
    </section>
  )
}


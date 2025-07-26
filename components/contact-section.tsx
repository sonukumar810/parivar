"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Facebook, Building, ExternalLink, Instagram } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [wordCount, setWordCount] = useState(0)

  const MAX_WORDS = 60
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const NAME_REGEX = /^[a-zA-Z\s]*$/

  const validateForm = () => {
    let valid = true
    const newErrors = { name: "", email: "", message: "" }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required."
      valid = false
    } else if (!NAME_REGEX.test(formData.name)) {
      newErrors.name = "Name can only contain alphabets and spaces."
      valid = false
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required."
      valid = false
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
      valid = false
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required."
      valid = false
    } else if (wordCount > MAX_WORDS) {
      newErrors.message = `Message cannot exceed ${MAX_WORDS} words.`
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Simulate API call or form submission
      alert("Thank you for your message! We'll get back to you soon.")
      // Reset form
      setFormData({ name: "", email: "", message: "" })
      setWordCount(0)
    } else {
      console.log("Form validation failed.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    if (name === "message") {
      const words = value.trim().split(/\s+/).filter(Boolean) // Split by one or more spaces, filter empty strings
      setWordCount(words.length)
    }

    // Clear error for the field being changed
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }))
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-700 mb-4 font-serif">
            Get in Touch with Parivar
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out for any queries, feedback, or business enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-6 font-serif">Contact Details</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Address</h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Parivaar Masale, near CRPF Camp,
                        <br />
                        Jhapha, Muzaffarpur, Bihar
                        <br />
                        NH 22, PINCODE 842004
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Email</h4>
                      <a
                        href="mailto:edinfoparivar@gmail.com"
                        className="text-gray-600 text-sm sm:text-base hover:underline"
                      >
                        edinfoparivar@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Facebook</h4>
                      <a
                        href="https://www.facebook.com/profile.php?id=100068889999739"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 text-sm sm:text-base hover:underline"
                      >
                        Parivar Masale
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Instagram</h4>
                      <a
                        href="https://www.instagram.com/parivar_maslae/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 text-sm sm:text-base hover:underline"
                      >
                        parivar_maslae
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="bg-white border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 sm:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8234567890123!2d85.3906!3d26.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzI0LjQiTiA4NcKwMjMnMjYuMiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Parivaar Masale Location"
                  />
                </div>
                <div className="p-4 bg-gray-50 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-red-700" />
                      <span className="text-sm font-medium text-gray-800">Our Location</span>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/qS6BA15HKyvUqT8WA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-red-700 hover:text-red-800 text-sm font-medium transition-colors"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-6 font-serif">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-24 sm:h-32 resize-none"
                    placeholder="Tell us how we can help you..."
                    maxLength={MAX_WORDS * 10} // Set a generous character limit to allow for long words, actual word count handled by logic
                  />
                  <p className="text-xs text-gray-500 mt-1 text-right">
                    {wordCount} / {MAX_WORDS} words
                  </p>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-800 text-white py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Business Information */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-red-50 to-yellow-50 border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-6 font-serif text-center">
                Business Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex items-start space-x-4">
                  <Building className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">Packed and Marketed By:</h4>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">TANNU SHREE GRIH UDYOG</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <img src="/images/fssai-logo.png" alt="FSSAI Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">FSSAI License No.:</h4>
                    <p className="text-gray-700 font-medium text-sm:text-base">10421060000119</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <img src="/images/fssai-logo.png" alt="FSSAI Certified" className="w-12 h-8 object-contain" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">FSSAI Certified</span>
                </div>
                <p className="text-gray-600 text-sm">Licensed and certified for food safety and quality assurance</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

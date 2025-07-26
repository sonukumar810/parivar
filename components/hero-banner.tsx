"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Parivar – The Finest Spice Manufacturer in India",
      subtitle: "Bringing Authentic Flavors to Your Kitchen!",
      description: "Pure, Fresh & Traditional Spices",
      image: "/images/hero/IMG_20250724_144034.jpg",
      alt: "Woman tasting food with Parivar spices in a kitchen",
    },
    {
      title: "Swaad Jo Jode Apno Ko",
      subtitle: "Where Tradition Meets Technology",
      description: "Handpicked Premium Quality Spices",
      image: "/images/hero/IMG_20250724_143955.jpg",
      alt: "Parivar Besan packets and gram flour in a bowl with tropical background",
    },
    {
      title: "From Farm to Your Kitchen",
      subtitle: "Authentic Indian Masala Collection",
      description: "Preserving Traditional Flavors Since 2002",
      image: "/images/hero/IMG_20250724_144054.jpg",
      alt: "Smiling woman in a pink saree cooking with Parivar spices",
    },
    {
      title: "Pure & Natural Spices",
      subtitle: "No Artificial Colors or Preservatives",
      description: "Trusted by Families Across India",
      image: "/images/hero/IMG_20250724_144218.jpg",
      alt: "Parivar spice packets and loose spices on a wooden table with a blurred market background",
    },
    {
      title: "Experience the Parivar Difference",
      subtitle: "Quality You Can Taste",
      description: "Made with Love, Delivered with Care",
      image: "/images/hero/IMG_20250724_144419.jpg",
      alt: "Smiling woman holding Parivar Haldi packet in a kitchen",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
            role="img"
            aria-label={slide.alt}
          />

          {/* Removed the color overlay div */}
          {/* <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`} /> */}

          <div className="absolute inset-0 flex items-center justify-center">
            {/* Removed the semi-transparent background from the text container */}
            <div className="text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 font-serif leading-tight text-shadow-md shadow-black">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 text-yellow-300 font-semibold text-shadow-sm shadow-black">
                {slide.subtitle}
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto text-shadow-sm shadow-black">
                {slide.description}
              </p>
              <Button
                size="lg"
                className="bg-red-700 hover:bg-red-800 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 text-shadow-sm shadow-black"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Our Spices
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 w-10 h-10 sm:w-12 sm:h-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 w-10 h-10 sm:w-12 sm:h-12"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-yellow-400 scale-125" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

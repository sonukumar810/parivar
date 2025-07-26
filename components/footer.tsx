"use client"

import { Leaf, Facebook, Mail, Heart, Instagram } from "lucide-react" // Import Instagram icon

export default function Footer() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Recipes", href: "#recipes" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">Parivar</h3>
                <p className="text-gray-300 text-sm">Finest Indian Spices</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 max-w-md text-sm sm:text-base">
              Bringing authentic Indian flavors to your kitchen since 2002. From our family to yours, with love and
              tradition.
            </p>
            <p className="text-yellow-400 font-semibold text-base sm:text-lg font-serif">"Swaad Jo Jode Apno Ko"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 text-yellow-400">Connect With Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:edinfoparivar@gmail.com" className="text-gray-300 text-xs sm:text-sm hover:underline">
                  edinfoparivar@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <a
                  href="https://www.facebook.com/profile.php?id=100068889999739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-xs sm:text-sm hover:underline"
                >
                  Parivar Masale
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/parivar_maslae/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-xs sm:text-sm hover:underline"
                >
                  parivar_maslae
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <p className="text-gray-400 text-xs sm:text-sm flex items-center">
            Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mx-1" /> in India | © Parivaar 2025
          </p>
          <p className="text-gray-400 text-xs sm:text-sm">Where Tradition Meets Technology</p>
        </div>
      </div>
    </footer>
  )
}

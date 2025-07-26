import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function FounderSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-50 via-amber-50 to-green-50 border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] lg:min-h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/suresh-kumar.png')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Suresh Kumar Gupta</p>
                  <p className="text-xs opacity-90">Founder & Visionary</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-600 mb-4" />
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif text-gray-800 leading-relaxed mb-6">
                    "Built with passion and purity—from bicycle beginnings to kitchens across India."
                  </blockquote>
                  <div className="text-right">
                    <p className="text-lg sm:text-xl font-bold text-red-700 font-serif">– Suresh Kumar Gupta</p>
                    <p className="text-gray-600 text-sm sm:text-base">Founder, Parivar Masale</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 font-serif">The Journey</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    What started as a small venture with a bicycle has grown into a trusted brand that brings authentic
                    Indian flavors to thousands of homes. Our commitment to quality and tradition remains unchanged,
                    even as we embrace modern technology to serve you better.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

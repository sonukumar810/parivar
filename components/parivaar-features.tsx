import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Shield, Snowflake } from "lucide-react"

export default function ParivarrFeatures() {
  const features = [
    {
      icon: Leaf,
      title: "Handpicked from India's Finest Farms",
      description:
        "At Parivar, we partner with trusted farmers from renowned spice belts to bring you only the freshest and most aromatic spices—straight from the source to your kitchen.",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      icon: Shield,
      title: "Sealed with Hygiene, Packed with Love",
      description:
        "Our advanced, touch-free packaging systems ensure each pack of spice is hygienically processed and sealed to retain freshness, without compromising on safety or taste.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      icon: Snowflake,
      title: "Cold Grind Technology (CGT)",
      description:
        "We use Cold Grind Technology to preserve the natural oils, color, and rich flavor of every spice. This gentle method ensures maximum taste and aroma, just like you expect in a family kitchen.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "from-cyan-50 to-cyan-100",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-warm-beige to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-700 mb-6 font-serif">
            Kyunki Khana Sirf Zarurat Nahi, Ek Parivar Ki Pehchan Hai
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${feature.bgColor} border-0 overflow-hidden`}
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-serif leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-green-100 px-6 py-3 rounded-full border border-yellow-200">
            <span className="text-2xl">🌱</span>
            <span className="text-lg font-semibold text-red-700 font-serif">From Our Family to Yours</span>
          </div>
        </div>
      </div>
    </section>
  )
}

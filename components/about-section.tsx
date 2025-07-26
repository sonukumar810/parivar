import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-700 mb-4 font-serif">About Parivar</h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Parivar Masale has been a trusted name in the spice industry since 2002. Founded by Suresh Kumar Gupta, we
            have grown from humble beginnings to become one of the leading spice manufacturers in Bihar, India.
          </p>
        </div>

        {/* Company Story */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-red-700 mb-4 font-serif">Our Story</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Parivar Masale was established in 2002 with a vision to provide pure, authentic, and high-quality
                  spices to Indian households. What started as a small venture has now grown into a well-recognized
                  brand known for its commitment to quality and traditional flavors.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our founder, Suresh Kumar Gupta, began this journey with a simple belief - that every Indian kitchen
                  deserves the finest spices to create memorable meals. From sourcing the best raw materials to
                  implementing modern processing techniques while preserving traditional methods, we ensure that every
                  packet of Parivar Masale delivers authentic taste and aroma.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, Parivar Masale is proud to serve customers across India with our wide range of spice products,
                  each crafted with care and precision to bring out the best flavors in your cooking.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="space-y-8">
          {/* Mission */}
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-6 font-serif text-center">Our Mission</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg">
                  <strong>To provide pure, authentic, and high-quality spices</strong> that enhance the taste of Indian
                  cuisine while preserving traditional flavors and embracing modern processing techniques for consistent
                  quality.
                </p>
                <p className="text-base sm:text-lg">
                  We are committed to <strong>sourcing the finest raw materials</strong> directly from trusted farmers
                  across India's renowned spice-growing regions, ensuring that every grain of spice meets our stringent
                  quality standards.
                </p>
                <p className="text-base sm:text-lg">
                  Through our <strong>Cold Grind Technology and hygienic packaging processes</strong>, we preserve the
                  natural oils, color, and rich flavors of each spice, delivering products that maintain their potency
                  and freshness from our facility to your kitchen.
                </p>
                <p className="text-base sm:text-lg">
                  Our mission extends beyond just selling spices - we aim to{" "}
                  <strong>connect families through the joy of cooking</strong>, helping create memorable meals that
                  bring loved ones together around the dining table.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6 font-serif text-center">Our Vision</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg">
                  <strong>To become the most trusted and beloved spice brand in India</strong>, recognized not just for
                  our superior quality products, but for our unwavering commitment to authenticity, innovation, and
                  customer satisfaction.
                </p>
                <p className="text-base sm:text-lg">
                  We envision a future where <strong>Parivar Masale is present in every Indian kitchen</strong>, serving
                  as the foundation for countless delicious meals and cherished family moments across the nation.
                </p>
                <p className="text-base sm:text-lg">
                  Our vision includes <strong>expanding our reach while maintaining our core values</strong> of quality,
                  tradition, and family-first approach. We aim to introduce innovative spice blends and products that
                  cater to evolving culinary preferences while staying true to authentic Indian flavors.
                </p>
                <p className="text-base sm:text-lg">
                  We aspire to <strong>set industry standards for spice quality and processing</strong>, leading by
                  example in sustainable sourcing practices, supporting local farmers, and contributing to the growth of
                  India's agricultural communities.
                </p>
                <p className="text-base sm:text-lg">
                  Ultimately, we see Parivar as more than a spice brand -{" "}
                  <strong>we are custodians of India's rich culinary heritage</strong>, dedicated to preserving
                  traditional flavors for future generations while embracing modern technology to serve our customers
                  better.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

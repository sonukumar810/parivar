import { Card, CardContent } from "@/components/ui/card"

export default function ProductsSection() {
  const spices = [
    {
      name: "Haldi (Turmeric)",
      image: "/images/products/haldi-package.png",
      description: "Vibrant, aromatic turmeric powder with natural golden color",
      sizes: ["50g", "100g", "200g", "500g"],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Mirchi (Chilli)",
      image: "/images/products/mirchi-package.png",
      description: "Bold, fiery red chilli powder for authentic heat",
      sizes: ["50g", "100g", "200g", "500g"],
      color: "from-red-400 to-red-600",
    },
    {
      name: "Dhaniya (Coriander)",
      image: "/images/products/dhaniya-package.png",
      description: "Fragrant, enhancing coriander powder for perfect flavor",
      sizes: ["50g", "100g", "200g", "500g"],
      color: "from-green-400 to-green-600",
    },
    {
      name: "Kali Mirch (Black Pepper)",
      image: "/images/products/kali-mirch-package.png",
      description: "Strong, peppery black pepper powder for bold taste",
      sizes: ["50g", "100g", "200g", "500g"],
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Jeera (Cumin)",
      image: "/images/products/jeera-package.png",
      description: "Warm, earthy cumin powder for traditional Indian dishes",
      sizes: ["50g", "100g", "200g", "500g"],
      color: "from-amber-600 to-amber-800",
    },
    {
      name: "Besan (Gram Flour)",
      image: "/images/products/besan-package.png",
      description: "Premium quality gram flour for delicious Indian snacks and dishes",
      sizes: ["250g", "500g", "1kg", "2kg"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Garam Masala",
      image: "/images/products/garam-masala-package.png",
      description: "Perfect blend of aromatic spices for authentic Indian taste",
      sizes: ["50g", "100g", "200g", "500g"],
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Chicken Masala",
      image: "/images/products/chicken-masala-package.png",
      description: "Special spice blend crafted for delicious chicken dishes",
      sizes: ["50g", "100g", "200g", "500g"],
      color: "from-red-500 to-orange-600",
    },
    {
      name: "Kasturi Methi",
      image: "/images/products/kasturi-methi-package.png",
      description: "Aromatic dried fenugreek leaves for rich, distinctive flavor",
      sizes: ["25g", "50g", "100g", "200g"],
      color: "from-green-500 to-green-700",
    },
  ]

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-700 mb-4 font-serif">
            Parivar Spice & Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Pure, Fresh & Flavorful! Handpicked spices that bring authentic Indian taste to your kitchen
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {spices.map((spice, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden w-full max-w-sm"
            >
              <div className="relative h-64 sm:h-72 lg:h-80 bg-white flex items-center justify-center p-4">
                <div
                  className="w-full h-full bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${spice.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-2 font-serif">{spice.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">{spice.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Available Sizes:</p>
                  <div className="flex flex-wrap gap-2">
                    {spice.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-2 sm:px-3 py-1 bg-yellow-100 text-yellow-700 border border-yellow-300 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

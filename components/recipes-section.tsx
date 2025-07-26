"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react" // Import useEffect and useRef

export default function RecipesSection() {
  const router = useRouter()
  const recipesSectionRef = useRef<HTMLDivElement>(null) // Create a ref for the section

  const recipes = [
    {
      id: "butter-chicken",
      name: "Butter Chicken",
      image: "/images/butter-chicken.jpg",
      color: "from-orange-400 to-red-500",
    },
    {
      id: "chicken-biryani",
      name: "Chicken Biryani",
      image: "/images/chicken-biryani.jpg",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "dal-tadka",
      name: "Dal Tadka",
      image: "/images/dal-tadka.jpg",
      color: "from-yellow-500 to-amber-600",
    },
    {
      id: "rajma-curry",
      name: "Rajma Curry",
      image: "/images/rajma-curry.jpg",
      color: "from-red-500 to-red-700",
    },
    {
      id: "chole-bhature",
      name: "Chole Bhature",
      image: "/images/chole-bhature.jpg",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: "paneer-makhani",
      name: "Paneer Makhani",
      image: "/images/paneer-makhani.jpg",
      color: "from-orange-500 to-red-600",
    },
  ]

  const handleRecipeClick = (recipeId: string) => {
    router.push(`/recipes/${recipeId}`)
  }

  useEffect(() => {
    // Check if the current URL hash is '#recipes'
    if (window.location.hash === "#recipes" && recipesSectionRef.current) {
      // Use a timeout to ensure the page has rendered and the header is in place
      setTimeout(() => {
        const headerHeight = document.querySelector("header")?.offsetHeight || 0
        window.scrollTo({
          top: recipesSectionRef.current!.offsetTop - headerHeight,
          behavior: "smooth",
        })
      }, 100) // Small delay to allow rendering
    }
  }, [router.asPath]) // Re-run effect when the route path changes (including hash)

  return (
    <section id="recipes" ref={recipesSectionRef} className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-700 mb-4 font-serif">Popular Recipes</h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover delicious recipes made with authentic Parivar spices
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recipes.map((recipe, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
                onClick={() => handleRecipeClick(recipe.id)}
              >
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${recipe.image || "/placeholder.svg?height=300&width=400&text=" + encodeURIComponent(recipe.name)}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h4 className="text-white text-xl sm:text-2xl font-bold text-center px-4 font-serif drop-shadow-lg">
                      {recipe.name}
                    </h4>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 text-center">Click to view full recipe</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* India Spices Heritage Section */}
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px] lg:min-h-[500px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('/images/india-spices-map.jpeg')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-warm-beige to-yellow-50">
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-700 leading-tight font-serif">
                      "From Every Corner of India, to the Heart of Your Kitchen – Parivar Masale."
                    </h3>

                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-red-500"></div>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="text-base sm:text-lg">
                        At Parivar, we celebrate India's rich heritage of flavors. Our handpicked, pure spices from
                        every region of the country bring you the essence of home-cooked love and tradition.
                      </p>

                      <p className="text-base sm:text-lg">
                        From <strong className="text-red-700">Gujarat's bold taste</strong> to{" "}
                        <strong className="text-green-700">Assam's fragrant notes</strong>, from{" "}
                        <strong className="text-orange-700">Kashmir's warmth</strong> to{" "}
                        <strong className="text-red-600">Kerala's punch</strong> – Parivar packs the whole of India into
                        your spice box.
                      </p>

                      <p className="text-base sm:text-lg font-medium text-red-700">
                        Taste the diversity, feel the unity with every pinch of Parivar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

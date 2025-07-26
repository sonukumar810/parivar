"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, ChefHat, ArrowLeft, Home } from "lucide-react"
import { useRouter } from "next/navigation"
import Header from "./header"
import Footer from "./footer"

interface Recipe {
  id: string
  name: string
  image: string
  time: string
  serves: string
  difficulty: string
  ingredients: string[]
  instructions: string[]
  parivarrSpices: string[]
  tips: string[]
}

interface RecipeDetailPageProps {
  recipe: Recipe
}

export default function RecipeDetailPage({ recipe }: RecipeDetailPageProps) {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      {/* Header is fixed */}
      <Header />

      {/* Main content area, flex-grow to push footer down, and padding-top to clear fixed header */}
      <div className="flex-grow pt-28 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            {/* Changed "Back" button to explicitly navigate to the recipes section on the homepage */}
            <Button
              onClick={() => router.push("/#recipes")} // Changed back to router.push("/#recipes")
              variant="ghost"
              className="text-red-700 hover:text-red-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Recipes
            </Button>
            <Button onClick={() => router.push("/")} variant="ghost" className="text-red-700 hover:text-red-800">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${recipe.image || "/placeholder.svg?height=400&width=600&text=" + encodeURIComponent(recipe.name)}')`,
                }}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-red-700 mb-4 font-serif">{recipe.name}</h1>
                <div className="flex flex-wrap gap-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{recipe.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">{recipe.serves}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ChefHat className="w-5 h-5" />
                    <span className="font-medium">{recipe.difficulty}</span>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-r from-yellow-50 to-green-50 border-yellow-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-3 font-serif">Parivar Spices Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {recipe.parivarrSpices.map((spice, index) => (
                      <span key={index} className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium">
                        {spice}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recipe Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Ingredients */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-red-700 mb-6 font-serif">Ingredients</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0" />
                      <span className="text-gray-700 text-lg leading-relaxed">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-red-700 mb-6 font-serif">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <span className="w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 leading-relaxed text-lg">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Tips */}
          {recipe.tips.length > 0 && (
            <Card className="bg-gradient-to-r from-green-50 to-yellow-50 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-red-700 mb-6 font-serif">Chef's Tips</h2>
                <ul className="space-y-3">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed text-lg">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      {/* Footer is at the bottom */}
      <Footer />
    </div>
  )
}

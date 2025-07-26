"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react"

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

interface RecipeDetailProps {
  recipe: Recipe
  onBack: () => void
}

export default function RecipeDetail({ recipe, onBack }: RecipeDetailProps) {
  return (
    <div className="min-h-screen bg-amber-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button onClick={onBack} variant="ghost" className="mb-6 text-red-700 hover:text-red-800">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Recipes
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recipe Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${recipe.image || "/placeholder.svg?height=400&width=600&text=" + encodeURIComponent(recipe.name)}')`,
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Recipe Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4 font-serif">{recipe.name}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{recipe.serves}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChefHat className="w-4 h-4" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>

            {/* Parivaar Spices Used */}
            <Card className="bg-gradient-to-r from-yellow-50 to-green-50 border-yellow-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-red-700 mb-2 font-serif">Parivar Spices Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.parivarrSpices.map((spice, index) => (
                    <span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      {spice}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ingredients */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-red-700 mb-4 font-serif">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-red-700 mb-4 font-serif">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-red-700 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed">{instruction}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Tips */}
        {recipe.tips.length > 0 && (
          <Card className="mt-8 bg-gradient-to-r from-green-50 to-yellow-50">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-red-700 mb-4 font-serif">Chef's Tips</h2>
              <ul className="space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

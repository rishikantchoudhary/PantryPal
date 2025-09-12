import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Clock, Users, AlertTriangle } from 'lucide-react'

export default function RecipeCard() {
  return (
    <Card className="bg-white shadow-md rounded-2xl p-4 w-full max-w-md border border-gray-100">
      {/* Header with Dish Name */}
      <CardHeader>
        <h2 className="text-xl font-semibold text-gray-800">
          Margherita Pizza
        </h2>
      </CardHeader>

      {/* Cooking Info */}
      <CardContent className="space-y-3">
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-orange-500" />
            <span>30 mins</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={18} className="text-green-600" />
            <span>2 servings</span>
          </div>
        </div>

        {/* Ingredients Section */}
        <div>
          <h3 className="font-medium text-gray-700 mb-1">
            Ingredients you have:
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            <li>Pizza dough</li>
            <li>Tomato sauce</li>
            <li>Fresh mozzarella</li>
            <li>Olive oil</li>
            <li>Basil leaves</li>
          </ul>
        </div>

        {/* Missing Ingredients */}
        <div className="bg-red-50 p-2 rounded-lg">
          <div className="flex items-center gap-2 text-red-600 font-medium">
            <AlertTriangle size={16} />
            Missing Ingredients
          </div>
          <ul className="list-disc list-inside text-red-500 text-sm mt-1">
            <li>Oregano</li>
            <li>Parmesan cheese</li>
          </ul>
        </div>

        {/* Cooking Steps */}
        <div>
          <h3 className="font-medium text-gray-700 mb-1">Steps to cook:</h3>
          <ol className="list-decimal list-inside text-gray-600 text-sm space-y-1">
            <li>Preheat oven to 475°F (245°C).</li>
            <li>Roll out the pizza dough on a floured surface.</li>
            <li>Spread tomato sauce evenly over the base.</li>
            <li>Add mozzarella slices and drizzle olive oil.</li>
            <li>Bake for 10–12 minutes until golden.</li>
            <li>Top with fresh basil leaves before serving.</li>
          </ol>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-end">
        <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-xl shadow-sm transition">
          Start Cooking
        </button>
      </CardFooter>
    </Card>
  )
}

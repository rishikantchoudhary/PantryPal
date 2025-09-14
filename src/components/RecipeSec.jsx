import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import RecipeCard from './RecipeCard'

const RecipeSec = ({ ingredients }) => {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  useEffect(() => {
    if (!ingredients) return

    const fetchRecipes = async () => {
      try {
        const backendUrl = 'https://pantrypal-backend-46sv.onrender.com/recipes'
        const response = await fetch(backendUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ingredients }),
        })

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`)
        }

        const data = await response.json()
        setRecipes(data.recipe || [])
      } catch (err) {
        console.error('Error fetching recipes:', err)
        setRecipes([])
        setError('Internal server error : Please try after some time.')
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [ingredients])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#F4AF48] border-t-transparent rounded-full animate-spin"></div>
        <p className="ml-4 text-stone-500 font-medium text-base md:text-lg">
          Loading recipes...
        </p>
      </div>
    )
  }

  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-stone-600">Oops! Some problem occured :\</p>
        <p className="text-stone-600">Try again after some time.</p>
        <button
          className="mx-auto w-24 h-11 block bg-[#F4AF48] hover:bg-[#EF8641] text-stone-700 border-stone-400 border-2 rounded-lg hover:cursor-pointer"
          onClick={handleClick}
        >
          Go Back
        </button>
      </div>
    )
  }

  return (
    <div className="w-[90%] md:w-[65%] max-w-[1150px] mx-auto px-6 py-10">
      <h2 className='font-["urbanist"] text-2xl md:text-3xl font-semibold mb-6 text-stone-800'>
        Recipes for: {ingredients}
      </h2>
      <div>
        {recipes.map((recipe, idx) => (
          <RecipeCard key={idx} recipe={recipe} />
        ))}
      </div>
      <button
        className="mx-auto w-24 h-11 block bg-[#F4AF48] hover:bg-[#EF8641] text-stone-700 border-stone-400 border-2 rounded-lg hover:cursor-pointer"
        onClick={handleClick}
      >
        Go Back
      </button>
    </div>
  )
}

export default RecipeSec

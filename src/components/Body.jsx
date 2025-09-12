import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import search from '../assets/search.png'

const Body = () => {
  const inputRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const ingredients = inputRef.current.value.trim()
    if (!ingredients) return

    try {
      const backendUrl = 'https://pantrypal-backend-nbft.onrender.com/recipes'
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients: ingredients }),
      })

      const data = await response.json()
      console.log('Backend response:', data)

      // Navigate to recipes page
      navigate('/recipes', { state: { recipes: data.recipes } })
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }

    inputRef.current.value = ''
  }

  return (
    <div className="w-[90%] md:w-[55%] max-w-[1150px] m-auto my-10 flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="mb-14 w-[100%] flex flex-col md:flex-row items-center"
      >
        <input
          type="text"
          ref={inputRef}
          placeholder="e.g., Tomato, Pasta, Onion, Garlic..."
          className="md:mr-12 my-6 px-4 h-11 w-[100%] border-stone-400 border-2  md:flex-4 rounded-lg"
        />
        <button
          type="submit"
          className="w-[30%] min-w-[170px] h-11 md:flex-1 flex items-center justify-evenly bg-[#F4AF48] hover:bg-[#EF8641] text-stone-800 border-stone-400 border-2 rounded-lg"
        >
          <img src={search} className="h-5" />
          Find Recipes
        </button>
      </form>
      <div className="w-[100%]">
        <p className="my-10 text-stone-800 text-4xl text-center">
          Ready to cook something amazing?
        </p>
        <p className="w-[60%] mx-auto my-8 text-stone-500 text-lg text-center">
          Start by adding your ingredients above and we'll find the perfect
          recipes for you.
        </p>
        <div className="px-6 py-4 rounded-2xl bg-[#D1FEC0]">
          <p className="text-green-800 font-medium text-center">
            💡 <span className="font-bold">Tip:</span> The more ingredients you
            add, the better recipes we can suggest!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Body

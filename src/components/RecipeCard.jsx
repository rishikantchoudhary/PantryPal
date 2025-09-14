import people from '../assets/people.png'
import time from '../assets/time.png'

const RecipeCard = ({ recipe }) => {
  return (
    <div className="w-full m-auto my-7 md:my-10 rounded-2xl p-8 bg-[#D1FEC0]">
      <h3 className="text-2xl font-medium text-stone-700">
        {recipe.recipeName}
      </h3>
      <div className="my-2 flex flex-col md:flex-row">
        <span className="flex text-stone-500 font-medium">
          <img src={time} alt="Time" className="h-5 mr-2" />
          {recipe.estimatedTime} minutes
        </span>
        <span className="mt-2 md:mt-0 md:ml-16 flex text-stone-500 font-medium">
          <img src={people} alt="Servings" className="h-5 mr-2" />
          {recipe.servings} servings
        </span>
      </div>
      <div className="md:flex">
        <div className="mt-4 md:mr-24">
          <span className="text-lg font-medium text-stone-600">
            Ingredients you have:
          </span>
          <ul className="list-disc pl-4 marker:text-stone-400 md:marker:text-xl">
            {recipe.ingredientsYouHave.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <span className="mt-10 text-lg font-medium text-stone-600">
            Missing ingredients:
          </span>
          <ul className="list-disc pl-4 marker:text-stone-400 md:marker:text-xl">
            {recipe.missingIngredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-lg font-medium text-stone-600">
          Steps to make:
        </span>
        <ul className="list-disc pl-4 marker:text-stone-400 md:marker:text-xl">
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default RecipeCard

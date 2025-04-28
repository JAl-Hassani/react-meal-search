import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
  return (
    <Link to="/recipe" state={{ recipe }}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 hover:shadow-xl transition-shadow">
        <img
          className="w-full"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{recipe.strMeal}</div>
          <p className="text-gray-400 text-base">
            {recipe.strInstructions?.slice(0, 100)}...
          </p>
        </div>
      </div>
    </Link>
  )
}
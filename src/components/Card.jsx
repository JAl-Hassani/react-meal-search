export default function Card({meal}) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
          <img
            className="w-full"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{meal.strMeal}</div>
            <p className="text-gray-400 text-base">
                {meal.strInstructions?.slice(0, 100)}
            </p>
          </div>
        </div>
    )
}
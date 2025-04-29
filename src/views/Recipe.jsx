import React from 'react'
import { useLocation } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

export default function Recipe() {
  const location = useLocation()
  const recipe = location.state?.recipe

  if (!recipe) {
    return (
      <MainLayout>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold text-gray-100">Recipe Not Found</h1>
        </div>
      </MainLayout>
    )
  }

  // Extract ingredients and measures
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({ ingredient, measure })
    }
  }

  // Extract tags
  const tags = recipe.strTags ? recipe.strTags.split(',') : []

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-100 text-center">{recipe.strMeal}</h1>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full max-w-md mx-auto my-4 rounded-lg"
        />

        {/* Tags Section */}
        {tags.length > 0 && (
          <div className="text-center mt-4">
            <h2 className="text-lg text-gray-100 mb-2">Tags</h2>
            <div className="flex flex-wrap justify-center space-x-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        <h2 className="text-2xl font-bold text-gray-100 mb-4 mt-8">Instructions</h2>
        <p className="text-gray-100 mt-4">{recipe.strInstructions}</p>

        {/* Ingredients Table */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Ingredients</h2>
          <table className="table-auto w-full text-gray-100">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">Ingredient</th>
                <th className="border px-4 py-2 text-left">Measure</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.ingredient}</td>
                  <td className="border px-4 py-2">{item.measure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {recipe.strYoutube && (
          <div className="mt-4 text-center">
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <h2 className="text-2xl font-bold">Watch on YouTube!</h2>
            </a>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
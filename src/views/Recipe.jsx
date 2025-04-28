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

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-100 text-center">{recipe.strMeal}</h1>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full max-w-md mx-auto my-4 rounded-lg"
        />
        <p className="text-gray-100 mt-4">{recipe.strInstructions}</p>
        {recipe.strYoutube && (
          <div className="mt-4 text-center">
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Watch on YouTube!
            </a>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
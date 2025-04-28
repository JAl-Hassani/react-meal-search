import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'

export default function Ingredients() {
  const [recipes, setRecipes] = useState([]) // State to store recipes
  const [isLoading, setIsLoading] = useState(false) // State to track loading status
  const [error, setError] = useState('') // State to store error messages

  return (
    <MainLayout setRecipes={setRecipes} setError={setError} setIsLoading={setIsLoading}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-100">Ingredients Page</h1>
        {error && <p className="text-red-500">{error}</p>}
        {isLoading ? (
          <p className="text-gray-100">Loading...</p>
        ) : (
          <ul className="text-gray-100">
            {recipes.map((recipe) => (
              <li key={recipe.idRecipe}>{recipe.strRecipe}</li>
            ))}
          </ul>
        )}
      </div>
    </MainLayout>
  )
}

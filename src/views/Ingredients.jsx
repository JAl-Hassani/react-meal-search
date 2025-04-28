import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'

export default function Ingredients() {
  const [meals, setMeals] = useState([]) // State to store meals
  const [isLoading, setIsLoading] = useState(false) // State to track loading status
  const [error, setError] = useState('') // State to store error messages

  return (
    <MainLayout setMeals={setMeals} setError={setError} setIsLoading={setIsLoading}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-100">Ingredients Page</h1>
        {error && <p className="text-red-500">{error}</p>}
        {isLoading ? (
          <p className="text-gray-100">Loading...</p>
        ) : (
          <ul className="text-gray-100">
            {meals.map((meal) => (
              <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
          </ul>
        )}
      </div>
    </MainLayout>
  )
}

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
  const location = useLocation()
  const [recipes, setRecipes] = useState(location.state?.searchResults || []) // Use search results if provided
  const [isLoading, setIsLoading] = useState(false) // State to track loading status
  const [error, setError] = useState('') // State to store error messages
  const [searchTerm, setSearchTerm] = useState(location.state?.searchTerm || '') // Use search term if provided

  // Fetch 6 random recipes when the app loads (only if no search results are provided)
  useEffect(() => {
    if (!location.state?.searchResults) {
      const fetchRandomRecipes = async () => {
        setIsLoading(true)
        setError('') // Clear any previous errors
        const randomRecipes = []
        try {
          for (let i = 0; i < 6; i++) {
            const response = await fetch(
              'https://www.themealdb.com/api/json/v1/1/random.php'
            )
            if (!response.ok) {
              throw new Error(`Error fetching random recipe: ${response.statusText}`)
            }
            const data = await response.json()
            if (data.meals && data.meals.length > 0) {
              randomRecipes.push(data.meals[0]) // Add the first recipe from the response
            }
          }
          setRecipes(randomRecipes) // Update the state with the fetched recipes
          setSearchTerm('') // Clear the search term for random recipes
        } catch (error) {
          console.error('Error fetching random recipes:', error)
          setError('Failed to load random recipes. Please try again later.')
        } finally {
          setIsLoading(false) // Set loading to false after fetching recipes
        }
      }

      fetchRandomRecipes()
    }
  }, [location.state?.searchResults]) // Only run if no search results are provided

  return (
    <MainLayout setRecipes={setRecipes} setError={setError} setIsLoading={setIsLoading}>
      <main className="flex-grow">
        {error && (
          <p className="text-red-500 text-center col-span-full">{error}</p>
        )}
        <h2 className="text-xl font-bold text-center text-gray-100 mt-4">
          {searchTerm
            ? `Search results for "${searchTerm}"`
            : 'Feast your eyes on this!'}
        </h2>
        {isLoading ? (
          <div className="flex justify-center items-center mt-8">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 pt-4 pl-2 pr-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {recipes.length > 0 ? (
              recipes.map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} />)
            ) : (
              <p className="text-gray-400 text-center col-span-full">
                No recipes found. Try searching for something else!
              </p>
            )}
          </div>
        )}
      </main>
    </MainLayout>
  )
}

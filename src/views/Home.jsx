import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {
    const [meals, setMeals] = useState([]) // State to store meals
    const [isLoading, setIsLoading] = useState(true) // State to track loading status
    const [error, setError] = useState('') // State to store error messages
    const [searchTerm, setSearchTerm] = useState('') // State to track the current search term
  
    // Fetch 6 random meals when the app loads
    useEffect(() => {
      const fetchRandomMeals = async () => {
        setIsLoading(true)
        setError('') // Clear any previous errors
        const randomMeals = []
        try {
          for (let i = 0; i < 6; i++) {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            if (!response.ok) {
              throw new Error(`Error fetching random meal: ${response.statusText}`)
            }
            const data = await response.json()
            if (data.meals && data.meals.length > 0) {
              randomMeals.push(data.meals[0]) // Add the first meal from the response
            }
          }
          setMeals(randomMeals) // Update the state with the fetched meals
          setSearchTerm('') // Clear the search term for random meals
        } catch (error) {
          console.error('Error fetching random meals:', error)
          setError('Failed to load random meals. Please try again later.')
        } finally {
          setIsLoading(false) // Set loading to false after fetching meals
        }
      }
  
      fetchRandomMeals()
    }, []) // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="flex flex-col min-h-screen bg-gray-600">
      <Header
        setMeals={setMeals}
        setError={setError}
        setSearchTerm={setSearchTerm}
        setIsLoading={setIsLoading}
      />
      <main className="flex-grow">
        {error && (
          <p className="text-red-500 text-center col-span-full">{error}</p>
        )}
        <h2 className="text-xl font-bold text-center text-gray-100 mt-4">
          {searchTerm ? `Search results for "${searchTerm}"` : 'Feast your eyes on this!'}
        </h2>
        {isLoading ? (
          <div className="flex justify-center items-center mt-8">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 pt-4 pl-2 pr-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {meals.length > 0 ? (
              meals.map((meal) => (
                <Card key={meal.idMeal} meal={meal} />
              ))
            ) : (
              <p className="text-gray-400 text-center col-span-full">
                No meals found. Try searching for something else!
              </p>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

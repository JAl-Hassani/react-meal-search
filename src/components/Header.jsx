import { useState } from 'react'
import SearchForm from './SearchForm'

export default function Header({ setMeals, setError, setSearchTerm, setIsLoading }) {
  const [query, setQuery] = useState('') // Initialize query state

  const handleSearch = async (query) => {
        setError('') // Clear any previous errors
    setSearchTerm(query) // Update the search term
    setIsLoading(true) // Set loading to true
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Error fetching meals: ${response.statusText}`)
      }
      const data = await response.json()
      if (data.meals) {
        setMeals(data.meals) // Update meals state with the fetched data
      } else {
        setMeals([])
              }
    } catch (error) {
      console.error('Error fetching meals:', error)
      setError('Failed to fetch meals. Please try again later.')
    } finally {
      setIsLoading(false) // Set loading to false after fetching meals
    }
  }

  return (
    <header className="bg-gray-800 text-gray-100 p-4">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold">MealSearch!</h1>
        <SearchForm query={query} setQuery={setQuery} onSearch={handleSearch} />
      </div>
    </header>
  )
}
import { useState } from 'react'
import SearchForm from './SearchForm'

export default function Header({ setMeals, setError, setIsLoading }) {
  const [query, setQuery] = useState('')

  const handleSearch = async (query) => {
    setIsLoading(true)
    setError('') // Clear any previous errors
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      )
      if (!response.ok) {
        throw new Error(`Error fetching search results: ${response.statusText}`)
      }
      const data = await response.json()
      if (data.meals) {
        setMeals(data.meals) // Update meals with search results
      } else {
        setMeals([]) // Clear meals if no results are found
      }
    } catch (error) {
      console.error('Error performing search:', error)
      setError('Failed to perform search. Please try again later.')
    } finally {
      setIsLoading(false) // Set loading to false after fetching
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
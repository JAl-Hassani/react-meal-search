import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SearchForm from './SearchForm'

export default function Header({ setRecipes, setError, setIsLoading }) {
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
        setRecipes(data.meals) // Update recipes with search results
        return data.meals // Return the search results
      } else {
        setRecipes([]) // Clear recipes if no results are found
        return []
      }
    } catch (error) {
      console.error('Error performing search:', error)
      setError('Failed to perform search. Please try again later.')
      return []
    } finally {
      setIsLoading(false) // Set loading to false after fetching
    }
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo in the Center */}
        <Link to="/" className="mx-auto">
          <h1 className="text-2xl text-white font-bold">RecipeSearch!</h1>
        </Link>

        {/* Search Form on the Right */}
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
          <SearchForm query={query} setQuery={setQuery} onSearch={handleSearch} />
        </div>
      </div>
    </nav>
  )
}
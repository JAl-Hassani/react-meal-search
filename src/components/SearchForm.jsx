import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchForm({ query, setQuery, onSearch }) {
  const inputRef = useRef(null)
  const navigate = useNavigate() // Create a navigate instance

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (query.trim() !== '') {
      const results = await onSearch(query) // Perform the search and get results
      navigate('/', { state: { searchResults: results, searchTerm: query } }) // Navigate to Home with results
    }
  }

  return (
    <form id="searchForm" onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        id="searchField"
        type="text"
        ref={inputRef}
        placeholder="Search for recipes..."
        value={query} // Bind input value to query state
        onInput={(e) => setQuery(e.target.value)} // Update query state on input change
        className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
      />
      <button
        id="searchSubmit"
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  )
}
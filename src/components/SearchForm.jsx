import { useEffect, useState, useRef } from 'react'

export default function SearchForm({ query, setQuery, onSearch }) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.focus()
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(query) // Call the onSearch prop with the query
    }
  }

  return (
    <form id="searchForm" onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        id="searchField"
        type="text"
        ref={inputRef}
        placeholder="Search for meals..."
        value={query} // Bind input value to query state
        onInput={(e) => setQuery(e.target.value)} // Update query state on input change
        className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
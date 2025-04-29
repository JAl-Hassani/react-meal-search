import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Recipe from './views/Recipe'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
    </Routes>
  )
}

export default App

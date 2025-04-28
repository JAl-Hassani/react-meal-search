import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Ingredients from './views/Ingredients'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/ingredients"
        element={<Ingredients />} />
    </Routes>
  )
}

export default App

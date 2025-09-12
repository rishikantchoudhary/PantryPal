import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Recipes from './pages/Recipes'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
      </Routes>
    </div>
  )
}
export default App

import React from 'react'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Categories from './pages/Categories'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/categories/:category' element={<Categories />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
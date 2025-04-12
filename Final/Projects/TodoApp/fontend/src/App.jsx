import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import PageNotFound from './components/PageNotFound'
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

   
  )
}

export default App
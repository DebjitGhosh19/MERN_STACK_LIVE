import React from 'react'
import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Bloges from './pages/Bloges'

import Navbar from '../Components/Navbar'
import Blog from './pages/Blog'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/bloges" element={<Bloges/>} />
    <Route path="/bloges/:title" element={<Blog/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
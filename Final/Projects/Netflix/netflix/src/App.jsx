import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import Login from './components/Login'
import Browse from './components/Browse'
import Register from './components/Register'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/browse' element={<Browse/>}/>
    <Route path='/regiser' element={<Register/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
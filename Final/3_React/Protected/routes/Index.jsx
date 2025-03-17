import React, { useState } from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import AddBloges from '../src/pages/AddBloges'
import Error from '../src/pages/Error'
import Navbar from '../Layouts/Navbar'
import Protected from './Protected'
const Index = () => {
  const [isLogin, setisLogin] = useState(false)
  return (
   <BrowserRouter>

   <Navbar/>
   {isLogin?<button onClick={()=>setisLogin(!isLogin)}>LogOut</button>:<button onClick={()=>setisLogin(!isLogin)}>Login</button>}
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/add-bloges' element={<Protected isLogin={isLogin}><AddBloges/></Protected>}/>
  
    <Route path='*' element={<Error/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default Index
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from "react-router-dom";
import Add from './pages/Add';
import ProductsList from './pages/ProductsList';
import Orders from './pages/Orders';
import Login from './components/Login';
const App = () => {
  const [token, setToken] = useState('')
  return (
    <div className='bg-gray-50 min-h-screen'>
      {
        token==''?<Login/>:
          <>
      <Navbar/>
       <hr/>
      <div className='flex '>
        <Sidebar/>
     <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
      <Routes>
      <Route path='/add' element={<Add/>}/>
      <Route path='/productsList' element={<ProductsList/>}/>
      <Route path='/orders' element={<Orders/>}/>
     </Routes>
     </div>
      </div>
     
      </>
      }
    
    </div>
  )
}

export default App
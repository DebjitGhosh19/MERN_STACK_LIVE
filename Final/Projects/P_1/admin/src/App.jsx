import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from "react-router-dom";
import Add from './pages/Add';
import ProductsList from './pages/ProductsList';
import Orders from './pages/Orders';
import Login from './components/Login';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// export const backendUrl='http://localhost:3000'
export const backendUrl = import.meta.env.VITE_Backend_Url
const App = () => {
 
  const [token, setToken] = useState('')
  return (
  
    <div className='bg-gray-50 min-h-screen'>
        <ToastContainer/>
      {
        token==''?<Login setToken={setToken}/>:
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
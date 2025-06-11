import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShowpContext'
import { useLocation } from 'react-router-dom'


const SearchBar = () => {
  const {Search,setSearch,ShowSearch,setShowSearch}=useContext(ShopContext)
  const [Visibal, setVisibal] = useState(false)
  const location=useLocation()
  useEffect(() => {
  if (location.pathname.includes("collection")) {
    setVisibal(true)    
  }
  else{
    setVisibal(false)
  }
  }, [location])
  
 return ShowSearch&&Visibal? (
    <div className='bg-gray-100 py-5 px-3 flex items-center justify-center'>
    <div className=' w-3/4 sm:w-1/2 border border-gray-400 rounded-full  flex justify-between px-4 py-2'>
      <input value={Search} onChange={(e)=>setSearch(e.target.value)} className='w-full outline-0' type="text" placeholder='Search' />
    <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
    </div>
    <img onClick={()=>setShowSearch(false)} src={assets.cross_icon} alt="" className='w-3 ml-4 cursor-pointer' />
    </div>
  ):null
}

export default SearchBar
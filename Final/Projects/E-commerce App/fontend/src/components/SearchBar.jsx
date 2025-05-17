import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
  const [visiable,setVisiable]=useState(false);
  const location=useLocation();
  useEffect(() => {
  if (location.pathname.includes("/collection")) {
    setVisiable(true)
  }
  else{
    setVisiable(false)
  }
  },[location])
  
  return visiable && showSearch?(
    <div className='border-b border-t  border-gray-300 p-3 bg-gray-100  flex items-center justify-center  '>
      <div className='flex border rounded-full w-1/2  justify-between px-4 py-2 mr-2 cursor-pointer'> 
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' className='w-full outline-none cursor-pointer'/>
        <img src={assets.search_icon} className='w-4  ' alt="" />
      </div>
      <img src={assets.cross_icon} onClick={()=>setShowSearch(false)} className='w-3 flex justify-items-start cursor-pointer' alt="" />
    </div>
  ):null
}

export default SearchBar
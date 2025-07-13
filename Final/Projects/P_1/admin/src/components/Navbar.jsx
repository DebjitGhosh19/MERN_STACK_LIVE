import React from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
    <img className='max-w-[10%] min-w-[80px]' src={assets.logo} alt="" />
    <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 sm:text-sm rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
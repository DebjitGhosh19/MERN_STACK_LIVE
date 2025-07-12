import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
 
  return (
    <div className='flex flex-col w-15 sm:w-48 border border-gray-200 pl-5 pt-5 h-screen'>
        <div className='border border-r-0 p-1 border-gray-200 my-3 flex gap-2'>
         <img src={assets.add_icon} className='w-5 ml-1' alt="" />
         <p className='hidden sm:block'>Add items</p>
        </div>
        <div className='border border-r-0 p-1 border-gray-200 my-3 flex gap-2'>
         <img src={assets.order_icon} className='w-5 ml-1' alt="" />
         <p className='hidden sm:block'>List Items</p>
        </div>
        <div className='border border-r-0 p-1 border-gray-200 my-3 flex gap-2'>
         <img src={assets.order_icon} className='w-5 ml-1' alt="" />
         <p className='hidden sm:block'>Orders</p>
        </div>
    </div>
  )
}

export default Sidebar
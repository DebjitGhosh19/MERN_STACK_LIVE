import React, { useState } from 'react'
import {assets} from '../src/assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const [visibility, setVisibility] = useState(false)
  return (
   
    <div className='flex justify-between items-center py-4'>
      <img className='w-36' src={assets.logo} alt="" />
      <ul className='hidden sm:flex gap-4 text-gray-600 '>
       
        <NavLink className='flex flex-col items-center gap-1' to='/'>
        <p>HOME</p>
        <hr  className='hidden w-1/2 border-none h-[1px] bg-gray-600'/>
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1' to='/collection'>
        <p>COLLECTION</p>
        <hr  className='hidden w-1/2 border-none h-[1px] bg-gray-600'/>
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1' to='/about'>
        <p>ABOUT</p>
        <hr  className='hidden w-1/2 border-none h-[1px] bg-gray-600'/>
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1' to='/contact'>
        <p>CONTACT</p>
        <hr  className='hidden w-1/2 border-none h-[1px] bg-gray-600'/>
        </NavLink>
      </ul>

      <div  className='flex items-center gap-5'>
        <img src={assets.search_icon} alt="" className='w-5 cursor-pointer' />
        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
          <div className='absolute hidden group-hover:block  right-0 pt-4'>
            <div className=' w-36 bg-slate-100 pl-6 py-3'>
            <p className='text-gray-600 cursor-pointer hover:text-black'>My profile</p>
            <p className='text-gray-600 cursor-pointer hover:text-black'>Orders</p>
            <p className='text-gray-600 cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
        <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="" />
        <p className='absolute right-[-5px]  bottom-[-5px] bg-black text-white rounded-full leading-4  text-[8px] w-4 text-center'>10</p>
        </Link>
       <img onClick={()=>setVisibility(true)} src={assets.menu_icon} alt="" className='w-5 sm:hidden cursor-pointer'/>
      </div>

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden ${visibility?'w-full':'w-0'} bg-white text-gray-600` }>
          <div onClick={()=>setVisibility(false)} className='flex gap-5 cursor-pointer items-center px-5 py-3'>
            <img src={assets.dropdown_icon} alt="" className='rotate-180 h-4'/>
            <p>Back</p>
          </div>
          <div className='flex flex-col '>
          <NavLink onClick={()=>setVisibility(false)} className='cursor-pointer border px-5 py-2' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisibility(false)} className='cursor-pointer border px-5 py-2' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisibility(false)} className='cursor-pointer border px-5 py-2' to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisibility(false)} className='cursor-pointer border px-5 py-2' to='/contact'>CONTACT</NavLink>
          </div>

      </div>
    
    </div>
 

    
  )
}

export default Navbar
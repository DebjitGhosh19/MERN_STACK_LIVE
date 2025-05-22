import { Link, NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'
import { useState } from 'react'
const Navbar = () => {
  const [visibility, setVisibility] = useState(false)
  return (
    <>
    <div className='flex justify-between items-center py-5'>
      <Link to='/'>
      <img className='w-36' src={assets.logo} alt="" />
      </Link>
      <ul className='hidden sm:flex gap-6 text-gray-700 font-normal '>
        <NavLink to="/" className=' flex items-center gap-1 flex-col '>
        <p>HOME</p>
        <hr className='hidden w-1/2 ' />
        </NavLink>
        <NavLink to="/about" className=' flex items-center gap-1 flex-col '>
        <p>ABOUT</p>
        <hr className='hidden w-1/2 ' />
        </NavLink>
        <NavLink to="/collection" className=' flex items-center gap-1 flex-col '>
        <p>COLLECTION</p>
        <hr className='hidden w-1/2 ' />
        </NavLink>
        <NavLink to="/contact" className=' flex items-center gap-1 flex-col '>
        <p>CONTACT</p>
        <hr className='hidden w-1/2 ' />
        </NavLink>

      </ul>
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5' alt="" />
        <div className='group relative flex  flex-col items-center'>
          <img className='w-5' src={assets.profile_icon} alt="" />
          <div className='hidden group-hover:block absolute right-0 py-7 w-36 cursor-pointer text-gray-700'>
            <div className='bg-gray-100 flex flex-col  items-center py-4 gap-1 border rounded-md '>
              <p className='hover:text-black cursor-pointer'>My Profile</p>
              <p className='hover:text-black cursor-pointer'>Oredrs</p>
              <p className='hover:text-black cursor-pointer'>Logout</p>
            </div>
          </div> 
        </div>
         <Link to='/cart' className='relative'>       
            <img  src={assets.cart_icon} className='w-5 min-w-5' alt="" />
           <p className=' absolute w-4  right-[-5px] bottom-[-5px]  bg-black text-white text-[8px] rounded-full leading-4 text-center' >10</p>
         </Link>
        <img src={assets.menu_icon} className='w-5 sm:hidden cursor-pointer ' onClick={()=>setVisibility(true)}  alt=""  />
      </div>
        <div className={` absolute  top-0    right-0 bottom-0 overflow-hidden bg-white ${visibility?'w-full':'w-0'} `}>
          <div className='flex flex-col text-gray-700  ' >
        <div onClick={()=>setVisibility(false)} className='flex gap-4 py-2 cursor-pointer items-center pl-6 '>
          <img  src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
          <p>Back</p>
        </div>
        <NavLink onClick={()=>setVisibility(false)}  to="/" className="cursor-pointer border py-2  pl-6" >
          HOME
        </NavLink>
        <NavLink onClick={()=>setVisibility(false)}   to="/about" className="cursor-pointer border py-2  pl-6" >
          ABOUT
        </NavLink>
        <NavLink onClick={()=>setVisibility(false)}  to="/collection" className="cursor-pointer border py-2  pl-6" >
          COLLECTION
        </NavLink>
        <NavLink onClick={()=>setVisibility(false)}  to="/contact" className="cursor-pointer border py-2  pl-6" >
          CONTACT
        </NavLink>
        
        </div>
      </div>
    </div>
  
      </>
  )
}

export default Navbar
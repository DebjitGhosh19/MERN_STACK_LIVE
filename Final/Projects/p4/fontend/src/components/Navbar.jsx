import { useState } from 'react'
import {assets} from '../assets/assets.js'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const [visibility, setVisibility] = useState(false)
  return (
    <>
    <div className='flex justify-between py-5 items-center'>
      <img src={assets.logo} alt="" className='w-35'/>
      <ul className=' gap-4 hidden sm:flex '>
        <NavLink to='/' className='flex flex-col gap-1 items-center'>
          <p>HOME</p>
          <hr  className='w-2/4  hidden'/>
        </NavLink>
        <NavLink to='/collection' className='flex flex-col gap-1 items-center'>
          <p>COLLECTION</p>
          <hr  className='w-2/4 hidden '/>
        </NavLink>
        <NavLink to='/about' className='flex flex-col gap-1 items-center'>
          <p>ABOUT</p>
          <hr  className='w-2/4  hidden'/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col gap-1 items-center'>
          <p>CONTACT</p>
          <hr  className='w-2/4  hidden'/>
        </NavLink>
      </ul>
      <div className='flex gap-6 items-center justify-between'>
        <img src={assets.search_icon} className='w-5' alt="" />
        <div className='group relative '>
          <img src={assets.profile_icon} alt="" className='w-5' />
          <div className='group-hover:flex hidden absolute right-0 top-6 pt-2'>
            <div className=' bg-slate-100 w-36 items-center justify-center flex flex-col gap-2 py-2 text-gray-400 radious-md'>
              <p className='hover:text-black cursor-pointer'>My Profile</p>
              <p className='hover:text-black cursor-pointer'>Orders</p>
              <p className='hover:text-black cursor-pointer'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} alt=""  className='w-5 '/>
          <p className='absolute bg-black text-white text-[8px] rounded-full  leading-4 right-[-5px] bottom-[-5px] w-4 text-center'>10</p>
          </Link>
          <img src={assets.menu_icon} alt="" className='w-5  sm:hidden cursor-pointer' onClick={()=>setVisibility(true)} />
      </div>
      
    </div>
    <div className={`${visibility?'w-full':'w-0'} bg-white bottom-0 top-0 right-0 left-0 overflow-hidden flex flex-col absolute py-3 font-medium text-gray-600`}>
        <div className='flex  border-b-1 p-3 items-center cursor-pointer' onClick={()=>setVisibility(false)}>
          <img src={assets.dropdown_icon} className='w-3 rotate-180 ' alt="" />
          <p className='pl-6'>Back</p>
        </div>
      <NavLink to='/' onClick={()=>setVisibility(false)}  className='p-3 border-b-1'>
        HOME
      </NavLink>
       <NavLink to='/collection' onClick={()=>setVisibility(false)} className='p-3 border-b-1'>
       COLLECTION
      </NavLink>
      <NavLink to='/about' onClick={()=>setVisibility(false)} className='p-3 border-b-1'>
        ABOUT
      </NavLink>
       <NavLink to='/contact' onClick={()=>setVisibility(false)} className='p-3 border-b-1'>
       CONTACT
      </NavLink>
     
    </div>
    </>
  )
}

export default Navbar
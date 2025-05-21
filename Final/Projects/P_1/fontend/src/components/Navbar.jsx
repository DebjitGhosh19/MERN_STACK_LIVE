import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
const Navbar = () => {
  const [visiable, setVisiable] = useState(false)
  return (
    <>
    <div className="flex  justify-between items-center gap-5 py-5 font-medium ">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-36 cursor-pointer"/>
      </Link>
      <ul className="hidden sm:flex gap-5 font-normal">
        <NavLink  to='/' className='flex flex-col justify-center items-center gap-1 '>
          <p>HOME</p>
          <hr className="w-1/2 hidden" />
        </NavLink>
        <NavLink  to='/about'  className='flex flex-col justify-center items-center gap-1 '>
          <p>ABOUT</p>
          <hr className="w-1/2 hidden" />
        </NavLink>
        <NavLink  to='/collection'  className='flex flex-col justify-center items-center gap-1 '>
          <p>COLLECTION</p>
          <hr className="w-1/2 hidden" />
        </NavLink>
        <NavLink  to='/contact'  className='flex flex-col justify-center items-center gap-1 '>
          <p>CONTACT</p>
          <hr className="w-1/2 hidden"/>
        </NavLink>
      </ul>
      <div className="flex gap-6 justify-center items-center">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative ">
          <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="" />
          <div  className="hidden group-hover:flex absolute right-0 pt-3 text-gray-700 ">
              <div className="bg-gray-100 w-36  flex flex-col justify-center items-center gap-2 py-2 rounded" >
                <p className="hover:text-black cursor-pointer">My Profile</p>
                <p className="hover:text-black cursor-pointer">Orders</p>
                <p className="hover:text-black cursor-pointer">Logout</p>
              </div>
          </div>
          
        </div>
        <Link to='/cart' className="relative" >
            <img src={assets.cart_icon} className="w-5 min-w-5 " alt="" />
            <p className="bg-black text-white text-[8px] rounded-full absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4">10</p>
          </Link>
        <img onClick={()=>setVisiable(true)} src={assets.menu_icon} className="w-5 sm:hidden" alt="" />
      </div>
    </div>
    <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white ${visiable?'w-full':'w-0'} `}>
        <div className="flex flex-col cursor-pointer">
          <div className="flex gap-4 items-center pl-6 p-2 text-gray-700" onClick={()=>setVisiable(false)}>
            <img src={assets.dropdown_icon} className="h-4 rotate-180 transition-all  " alt="" />
            <p>Back</p>
          </div>
        <NavLink to='/' className='border border-gray-400  p-2 pl-6 text-gray-700 ' onClick={()=>setVisiable(false)}>
        HOME
        </NavLink>
        <NavLink to='/about'  className='border border-gray-400 p-2 pl-6 text-gray-700  ' onClick={()=>setVisiable(false)}>
        ABOUT
        </NavLink>
        <NavLink to='/collection'  className='border border-gray-400 p-2 pl-6 text-gray-700  ' onClick={()=>setVisiable(false)}>
        COLLECTION
        </NavLink>
        <NavLink to='/contact'  className='border border-gray-400  p-2 pl-6 text-gray-700 ' onClick={()=>setVisiable(false)}>
        CONTACT
        </NavLink>
        </div>
    </div>
    </>
  );
};

export default Navbar;

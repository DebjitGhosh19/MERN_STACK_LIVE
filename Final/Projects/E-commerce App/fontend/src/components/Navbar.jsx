import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const {setShowSearch}=useContext(ShopContext)
  const [menu, setmenu] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
     <Link to='/'>
     <img src={assets.logo} alt="logo" className="w-36" />
     </Link>
      <ul className="hidden sm:flex gap-5">
        <NavLink
          to="/"
          className="flex flex-col items-center justify-center font-normal gap-1"
        >
          <p>HOME</p>
          <hr className="w-2/4 hidden " />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center justify-center gap-1 font-normal"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 hidden " />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center justify-center font-normal gap-1"
        >
          <p>ABOUT</p>
          <hr className="w-2/4 hidden " />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center justify-center font-normal gap-1"
        >
          <p>CONTACT</p>
          <hr className="w-2/4 hidden " />
        </NavLink>
      </ul>
      <div className="flex gap-6  items-center">
        <img onClick={()=>setShowSearch(true)} className="w-5 cursor-pointer" src={assets.search_icon} alt="" />
        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className="group-hover:block hidden absolute    right-0 pt-4 text-gray-700 ">
            <div className="flex flex-col gap-2 justify-center items-center w-36 py-3 px-5  bg-gray-100 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart-icon" className="w-5 min-w-5" />
          <p className="absolute w-4  right-[-5px] bottom-[-5px] bg-black text-white rounded-full text-[8px] leading-4 text-center">
            10
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt="menu_icon"
          className="relative  w-5 sm:hidden cursor-pointer"
          onClick={() => setmenu(true)}
        />
      </div>
      <div className={`absolute top-0 bottom-0 right-0 overflow-hidden transition-all bg-white ${menu?'w-full':'w-0'}`}>
          <div className="text-gray-500 flex flex-col">
            <div onClick={()=>setmenu(false)} className="flex  gap-4 py-2 items-center cursor-pointer"> 
            <img src={assets.dropdown_icon} alt="" className="rotate-180 h-4 ml-5 " />
            <p>Back</p>
            </div>
            <NavLink onClick={()=>setmenu(false)}  to='/' className="cursor-pointer border py-2 pl-6">HOME</NavLink>
            <NavLink onClick={()=>setmenu(false)} to='/about' className="cursor-pointer border py-2 pl-6">ABOUT</NavLink>
            <NavLink onClick={()=>setmenu(false)} to='/collection' className="cursor-pointer border py-2 pl-6">COLLECTION</NavLink>
            <NavLink onClick={()=>setmenu(false)} to='/contact' className="cursor-pointer border py-2 pl-6">CONTACT</NavLink>
          </div>
      </div>
    </div>
  );
};

export default Navbar;

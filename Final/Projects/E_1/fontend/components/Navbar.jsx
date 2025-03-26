import React, { useState } from "react";
import { assets } from "../src/assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-between items-center py-5">
      <img src={assets.logo} className="w-36" alt="" />
      <ul className="hidden sm:flex gap-5">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-gray-700">HOME</p>
          <hr className="hidden w-1/2 text-gray-700" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="text-gray-700">COLLECTION</p>
          <hr className="hidden w-1/2 text-gray-700" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="text-gray-700">ABOUT</p>
          <hr className="hidden  w-1/2 text-gray-700" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="text-gray-700">CONTACT</p>
          <hr className="hidden w-1/2 text-gray-700" />
        </NavLink>
      </ul>
      <div className="flex gap-6 items-center">
        <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute right-0 pt-4">
            <div className="w-36 gap-2 text-slate-500 bg-slate-100 px-4 py-3 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative ">
          <img
            src={assets.cart_icon}
            alt=""
            className="w-5 min-w-5 cursor-pointer"
          />
          <p className="absolute right-[-5px] bottom-[-5px] bg-black  text-slate-100 rounded-full text-[8px] text-center leading-4 aspect-square w-4">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-5 sm:hidden cursor-pointer"
        />
      </div>
      <div
        className={`absolute right-0 bottom-0 top-0 overflow-hidden bg-white text-gray-600 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="text-gray-600 ">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center  p-3 gap-4 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <div   onClick={() => setVisible(false)} className="flex flex-col ">
            <NavLink className="border pl-6 py-2 cursor-pointer hover:text-black" to='/'>HOME</NavLink>
            <NavLink className="border pl-6 py-2 cursor-pointer hover:text-black" to='/collection'>COLLECTION</NavLink>
            <NavLink className="border pl-6 py-2 cursor-pointer hover:text-black" to='/about'>ABOUT</NavLink>
            <NavLink className="border pl-6 py-2 cursor-pointer hover:text-black" to='/contact'>CONTACT</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

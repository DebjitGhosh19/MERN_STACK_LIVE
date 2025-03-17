import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="" className="w-36" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
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
          <div className="group-hover:block  hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="relative cursor-pointer">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 cursor-pointer"
            alt=""
          />
          <p className="absolute right-[-5px] bottom-[-5px] bg-black text-white rounded-full w-4 leading-4 text-center aspect-square text-[8px] ">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisibility(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      <div
        className={`absolute top-0 bottom-0 right-0 bg-white ${
          visibility ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col  text-gray-500 ">
          <div
            className="flex p-3 gap-4 items-center cursor-pointer"
            onClick={() => setVisibility(false)}
          >
            <img src={assets.dropdown_icon} className="rotate-180 h-4" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className="cursor-pointer border pl-6 py-2"
            onClick={() => setVisibility(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/collection"
            className="cursor-pointer border pl-6 py-2"
            onClick={() => setVisibility(false)}
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/about"
            className="cursor-pointer border pl-6 py-2"
            onClick={() => setVisibility(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="cursor-pointer border pl-6 py-2"
            onClick={() => setVisibility(false)}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

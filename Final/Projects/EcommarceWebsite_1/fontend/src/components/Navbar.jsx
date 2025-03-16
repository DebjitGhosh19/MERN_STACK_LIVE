import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <img src={assets.logo} alt="Logo" className="w-36" />
      <ul className="hidden sm:flex  gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>
      <div className="flex gap-6 items-center">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className=" group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36  bg-slate-100 text-gray-500 py-3 px-5">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black ">Orders</p>
              <p className="cursor-pointer hover:text-black ">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="cursor-pointer relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] text-center bg-black text-white rounded-full leading-4 w-4 aspect-square text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          className="w-5 sm:hidden cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 bg-white transition-all overflow-hidden ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-500">
          <div
            onClick={() => setVisible(false)}
            className="flex gap-4 p-3 items-center cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="border  pl-6 py-2"
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border pl-6 py-2 "
            to={"/collection"}
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border  pl-6 py-2"
            to={"/about"}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border  pl-6 py-2"
            to={"/contact"}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

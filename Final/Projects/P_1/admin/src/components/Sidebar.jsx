import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router";
const Sidebar = () => {
  return (
    <div className="flex flex-col border border-gray-300 pl-5 w-[18%] min-h-screen  pt-5  gap-3 text-[15px]">
      <NavLink
        to="/add"
        className="flex items-center border border-r-0 px-3 py-2 border-gray-300   gap-3 rounded-1 md:pl-10 rounded-sm"
      >
        <img src={assets.add_icon} className="w-5 h-5" alt="" />
        <p className="hidden md:block">Add items</p>
      </NavLink>
      <NavLink
        to="/productsList"
        className="flex items-center border border-r-0 px-3 py-2 border-gray-300   gap-3 rounded-sm md:pl-10"
      >
        <img src={assets.order_icon} className="w-5 h-5" alt="" />
        <p className="hidden md:block">List Items</p>
      </NavLink>
      <NavLink
        to="/orders"
        className="flex items-center border border-r-0 px-3 py-2 border-gray-300 gap-3 rounded-1 md:pl-10 rounded-sm"
      >
        <img src={assets.order_icon} className="w-5 h-5" alt="" />
        <p className="hidden md:block">Orders</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;

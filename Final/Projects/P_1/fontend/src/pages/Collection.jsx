import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShowpConext";
import ProductsItem from "../components/ProductsItem";
const Collection = () => {
    const { products} = useContext(ShopContext);
  const [VisableFilter, setVisableFilter] = useState(false);
  
const [FilterData, setFilterData] = useState([]);
useEffect(() => {
  products.filter((item) => {

  })
    
}, [])


  
  return (
   
    
    <div>
      <hr />
      <div className="flex flex-col sm:flex-row py-10 gap-2">
        {/* left Side */}
        <div className={`sm:w-96 flex flex-col gap-4 `}>
          <div className="flex gap-2 items-center">
            <p className="text-xl ">FILTERS</p>
            <img className="w-2 cursor-pointer sm:hidden " onClick={(e)=>setVisableFilter(!VisableFilter)} src={assets.dropdown_icon} alt="" />
          </div>
          <div className={` ${VisableFilter ? "" : "hidden"} sm:flex flex-col`}>
            <div className="flex flex-col gap-2 border border-gray-300 p-4 mb-4">
              <p className="font-semibold">CATAGORIES</p>
              <div className="flex gap-2 text-gray-400">
                <input type="checkbox" name="men" id="" />
                <label htmlFor="men">Men</label>
              </div>
              <div className="flex gap-2 text-gray-400">
                <input type="checkbox" name="women" id="" />
                <label htmlFor="women">Women</label>
              </div>
              <div className="flex gap-2 text-gray-400">
                <input type="checkbox" name="kids" id="" />
                <label htmlFor="kids">Kids</label>
              </div>
            </div>
            <div className="flex flex-col gap-2 border border-gray-300 p-4">
              <p className="font-semibold">TYPE</p>
              <div className="flex gap-2 text-gray-400">
                <input type="checkbox" name="men" id="" />
                <label htmlFor="Topwear">Topwear</label>
              </div>
              <div className="flex gap-2 text-gray-400">
                <input type="checkbox" name="women" id="" />
                <label htmlFor="Bottomwear">Bottomwear</label>
              </div>
              <div className="flex gap-2 text-gray-400">
                <input type="checkbox" name="kids" id="" />
                <label htmlFor="Winterwear">Winterwear</label>
              </div>
            </div>
          </div>
        </div>
        {/* right Side */}
        <div className=" w-full  p-4">
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-1 sm:gap-2  ">
              <p>ALL COLLECTION</p>
              <p className="w-8 h-[2px] bg-black "></p>
            </div>
            <select name="" id="" className="border border-gray-300 p-2 rounded-md">
              <option value="relavent">Short by:Relevent</option>
              <option value="relavent">Short by:Low to High</option>
              <option value="relavent">Short by: High to Low</option>
            </select>
          </div>
        <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {
            products.map((item)=>(
              <ProductsItem id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

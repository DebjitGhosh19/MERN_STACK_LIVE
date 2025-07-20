import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1>Upload Image</h1>
      <div className="py-2 flex gap-2">
        <label htmlFor="image1">
          <img className="w-25" src={assets.upload_area} alt="" />
          <input type="file" id="image1" className="hidden" />
        </label>
        <label htmlFor="image1">
          <img className="w-25" src={assets.upload_area} alt="" />
          <input type="file" id="image1" className="hidden" />
        </label>
        <label htmlFor="image1">
          <img className="w-25" src={assets.upload_area} alt="" />
          <input type="file" id="image1" className="hidden" />
        </label>
        <label htmlFor="image1">
          <img className="w-25" src={assets.upload_area} alt="" />
          <input type="file" id="image1" className="hidden" />
        </label>
      </div>
      <div>
        <p>Product name</p>
        <input
          type="text"
          placeholder="Type here"
          className="w-[90%] md:w-[50%] p-2 border border-gray-400 my-2"
        />
      </div>
      <div>
        <p>Product description</p>
        <textarea
          placeholder="Write content here"
          className="w-[90%] md:w-[50%] p-2 border border-gray-400 my-2"
        ></textarea>
      </div>
      <div className="flex gap-8">
        <div>
          <p className="pb-2">Product category</p>
          <select name="category" id="category" className="border border-gray-400 px-6 py-2 rounded-sm ">
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="pb-2">Sub category</p>
          <select name="category" id="category" className="border border-gray-400 px-6 py-2 rounded-sm ">
            <option value="topwear">Topwear</option>
            <option value="bottomwear">Bottomwear</option>
            <option value="winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="pb-2">Product Price</p>
         <input type="number" placeholder="25" max={25} min={0} className="border border-gray-400 px-6 py-2 rounded-sm "/>
        </div>
       
      </div>
       <div>
          <p>Product Sizes</p>
          <div>
            <button className="bg-gray-200 px-3 py-1">S</button>
             <button className="bg-gray-200 px-3 py-1">S</button>
              <button className="bg-gray-200 px-3 py-1">S</button>
               <button className="bg-gray-200 px-3 py-1">S</button>
               
          </div>
        </div>
    </div>
  );
};

export default Add;

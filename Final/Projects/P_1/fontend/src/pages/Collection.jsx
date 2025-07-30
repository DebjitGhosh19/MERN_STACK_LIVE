import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShowpContext";
import ProductsItem from "../components/ProductsItem";
import Title from '../components/Title'
const Collection = () => {
    const { products,Search,ShowSearch} = useContext(ShopContext);
  const [VisableFilter, setVisableFilter] = useState(false);
  
const [Filter, setFilter] = useState([]);
const [Catagory, setCatagory] = useState([]);
const [SubCatagory, setSubCatagory] = useState([]);
const [Type, setType] = useState("Relavent");
const catagoryToggle = (e) => {
  if(Catagory.includes(e.target.value) ){
setCatagory((prev)=>prev.filter((item)=>item!==e.target.value))
  }
  else{
    setCatagory((prev)=>[...prev, e.target.value])
  }
}
const SubcatagoryToggle = (e) => {
  if(SubCatagory.includes(e.target.value) ){
setSubCatagory((prev)=>prev.filter((item)=>item!==e.target.value))
  }
  else{
    setSubCatagory((prev)=>[...prev, e.target.value])
  }
}

const ApplyFilter=()=>{
  let productCopy=products.slice();
  if (Search&&ShowSearch) {
    productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(Search.toLowerCase()))
  }
  if (Catagory.length>0) {
    productCopy=productCopy.filter((item)=>(Catagory.includes(item.category)))
  }
  if (SubCatagory.length>0) {
   productCopy=productCopy.filter((item)=>(SubCatagory.includes(item.subCategory)))
  }
    setFilter(productCopy)
  
}
const ShortFilter=()=>{
  let FpCopy=Filter.slice();
  switch (Type) {
  case "LowToHigh":
    setFilter((FpCopy.sort((a,b)=>(a.price-b.price))))
    break
     case "HighToLow":
    setFilter((FpCopy.sort((a,b)=>(b.price-a.price))))
    break;
  default:
    ApplyFilter()
    break;
}
}
useEffect(() => {
   ApplyFilter()
}, [Catagory,SubCatagory,Search,ShowSearch,products])

useEffect(() => {
ShortFilter()
}, [Type])

  return (
     
    <div>
      <hr />
      <div className="flex flex-col sm:flex-row py-10 gap-2">
        {/* left Side */}
        <div className={`sm:w-96 flex flex-col gap-4 `}>
          <div className="flex gap-2 items-center">
            <p className="text-xl ">FILTERS</p>
            <img className={`w-2 cursor-pointer sm:hidden ${VisableFilter?"rotate-90":" "} `} onClick={(e)=>setVisableFilter(!VisableFilter)} src={assets.dropdown_icon} alt="" />
          </div>
          <div className={` ${VisableFilter ? "" : "hidden"} sm:flex flex-col`}>
            <div className="flex flex-col gap-2 border border-gray-300 p-4 mb-4">
              <p className="font-semibold">CATAGORIES</p>
              <div className="flex gap-2 text-gray-400">
                <input type="checkbox" name="men" id="" value='Men'  onChange={catagoryToggle}/>
                <label htmlFor="men">Men</label>
              </div>
              <div className="flex gap-2 text-gray-400">
                <input type="checkbox" name="women" id="" value='Women' onChange={catagoryToggle}/>
                <label htmlFor="women">Women</label>
              </div>
              <div className="flex gap-2 text-gray-400">
                <input type="checkbox" name="kids" id="" value='Kids'  onChange={catagoryToggle} />
                <label htmlFor="kids">Kids</label>
              </div>
            </div>
            <div className="flex flex-col gap-2 border border-gray-300 p-4">
              <p className="font-semibold">TYPE</p>
              <div className="flex gap-2 text-gray-400">
                <input type="checkbox" name="Topwear" value="Topwear" id="" onChange={SubcatagoryToggle}/>
                <label htmlFor="Topwear">Topwear</label>
              </div>
              <div className="flex gap-2 text-gray-400">
                <input type="checkbox" name="Bottomwear"  value="Bottomwear" id="" onChange={SubcatagoryToggle}/>
                <label htmlFor="Bottomwear">Bottomwear</label>
              </div>
              <div className="flex gap-2 text-gray-400">
                <input type="checkbox" name="Winterwear"  value="Winterwear" id="" onChange={SubcatagoryToggle}/>
                <label htmlFor="Winterwear">Winterwear</label>
              </div>
            </div>
          </div>
        </div>
        {/* right Side */}
        <div className=" w-full  p-4">
          <div className="flex justify-between items-center gap-2">
              <Title text1="ALL" text2="COLLECTION"/>         
            <select name="" id="" onChange={(e)=>setType(e.target.value)} className="border border-gray-300 p-2 rounded-md">
              <option value="Relavent">Short by:Relevent</option>
              <option value="LowToHigh">Short by:Low to High</option>
              <option value="HighToLow">Short by: High to Low</option>
            </select>
          </div>
        <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {
            Filter.map((item,index)=>(
              <ProductsItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

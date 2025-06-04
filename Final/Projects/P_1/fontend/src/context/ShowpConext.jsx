import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext=createContext();
const ShopContextProvider=(props)=>{
  const delevery_fee=50;
  const currency='₹'
const [Search, setSearch] = useState('');
const [ShowSearch, setShowSearch] = useState(false)
 const value={
    products,
    delevery_fee,
    currency,Search,setSearch,ShowSearch,setShowSearch
  }
  return <ShopContext.Provider value={value}>
{props.children}
  </ShopContext.Provider>
}
export default ShopContextProvider
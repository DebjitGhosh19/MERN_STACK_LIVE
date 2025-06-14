import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from 'react-toastify';
export const ShopContext=createContext();
const ShopContextProvider=(props)=>{
  const delevery_fee=50;
  const currency='₹'
const [Search, setSearch] = useState('');
const [ShowSearch, setShowSearch] = useState(false);
const [CartItems, setCartItems] = useState({});
const addToCart=async(itemId,size)=>{
  if (!size) {
    toast.error("Select Product Size");
    return;
  }
  let cartData=structuredClone(CartItems);
  if (cartData[itemId]) {
    if (cartData[itemId][size]) {
      cartData[itemId][size]+=1;
    } else {
      cartData[itemId][size]=1
    }
  } else {
    cartData[itemId]={};
    cartData[itemId][size]=1
  }
  setCartItems(cartData)
}
const getCartData=()=>{
  let totalCount=0;
  for(const items in CartItems){
    for(const item in CartItems[items]){
      try {
        if(CartItems[items][item]>0){
        totalCount+=CartItems[items][item]
      }
      } catch (error) {
        
      }
    }
  }
  return totalCount;
}

 const value={
    products,
    delevery_fee,
    currency,Search,setSearch,ShowSearch,setShowSearch,addToCart,CartItems,getCartData
  }
  return <ShopContext.Provider value={value}>
{props.children}
  </ShopContext.Provider>
}
export default ShopContextProvider
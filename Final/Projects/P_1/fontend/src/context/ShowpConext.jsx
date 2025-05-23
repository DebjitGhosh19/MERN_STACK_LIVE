import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext=createContext();
const ShopContextProvider=(props)=>{
  const delevery_fee=50;
  const currency='₹'

 const value={
    products,
    delevery_fee,
    currency
  }
  return <ShopContext.Provider value={value}>
{props.children}
  </ShopContext.Provider>
}
export default ShopContextProvider
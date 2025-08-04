import React, { createContext } from 'react'
export const ShopContext=createContext();
import {products} from '../assets/assets'
const ShopContextProvider = (props) => {
  const value={
    products
  }
 
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
import { createContext, useState } from 'react';
import {products} from '../assets/assets'
export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
  const delevery_fee=50;
  const currency='₹';
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false)
  
  const value={
    products,delevery_fee,currency,
    search,setSearch,showSearch,setShowSearch
  }
  return(
    <ShopContext.Provider value={value}>
    { props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
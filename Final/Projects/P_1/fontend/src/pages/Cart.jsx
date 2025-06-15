import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShowpContext'

const Cart = () => {
  const {products,CartItems}=useContext(ShopContext);
  const [CartData, setCartData] = useState([]);
  useEffect(() => {
    const tempData=[];
    for (const items in CartItems) {
      for(const item in CartItems[items]){
        if (CartItems[items][item]>0) {
          tempData.push({
            _id:items,
            size:item,
            quantity:CartItems[items][item]
          })
        }
      }      
      console.log(tempData);
      
      setCartData(tempData)    
    }
  },[CartItems])
  
  return (
    <div>Cart</div>
  )
}

export default Cart
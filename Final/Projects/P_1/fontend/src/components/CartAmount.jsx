import React, { useContext } from 'react'
import { ShopContext } from '../context/ShowpContext'
import Title from './Title'

const CartAmount = () => {
  const {getCartAmount,delevery_fee,currency} = useContext(ShopContext)
  return (
    <div className='w-full'>
    <div className='w-full flex flex-col'>
      <div className=" text-2xl  mb-3 flex flex-start ">
       <Title   text1={"CART"} text2={"TOTALS"}/>
      </div>
      <div className='flex justify-between my-2'>
        <p>Subtitle</p>
        <p>{currency}{getCartAmount()}.00</p>
      </div>
       <hr className='w-full text-gray-200'/>
      <div className='flex justify-between my-2'>
        <p>Shipping Fee</p>
        <p><span>{currency}</span>{delevery_fee}.00</p>
       
      </div>
       <hr className='w-full text-gray-200'/>
      <div className=' flex justify-between my-2'>
        <b>Total</b>
        <b><span>{currency}</span>{getCartAmount()==0?0:getCartAmount()+delevery_fee}.00</b> 
      </div>

    </div>
    </div>
  )
}

export default CartAmount
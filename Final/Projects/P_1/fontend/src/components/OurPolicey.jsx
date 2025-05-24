import React from 'react'
import { assets } from '../assets/assets'
const OurPolicey = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around  gap-12 sm:gap-2 py-20 text-xl sm:text-sm md:text-base text-gray-700 text-center'>
      <div className='flex flex-col items-center justify-center text-center'>
        <img className='w-12 mb-5 ' img src={assets.exchange_icon} alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
      <div className='flex flex-col items-center justify-center text-center'>
        <img className='w-12  mb-5 ' src={assets.quality_icon} alt="" />
         7 Day Return Policy<p className='font-semibold'></p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>
      <div className='flex flex-col items-center justify-center text-center'>
        <img className='w-12  mb-5 ' src={assets.support_img} alt="" />
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicey
import React from 'react'
import {assets} from '../assets/assets'
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border  border-gray-400'>
        {/* Left Side Hero Section  */}
        <div className='flex flex-col items-center w-full sm:w-1/2 justify-center py-2 sm:py-10'>
          <div className='flex  items-center  gap-2 '>
            <p className='w-8 sm:w-11 h-[2px] bg-gray-400'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='text-3xl lg:text-5xl py-3 prata-regular'>Latest Arrivals</h1>
          <div className='flex items-center gap-2 '>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 sm:w-11 h-[2px] bg-gray-400'></p>
          </div>
        </div>
        <img className='flex flex-col items-center w-full sm:w-1/2 justify-center' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero
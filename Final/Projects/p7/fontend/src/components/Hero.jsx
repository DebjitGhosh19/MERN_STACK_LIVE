import React from 'react'
import {assets} from '../assets/assets.js'
const Hero = () => {

  
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* left Div */}
      <div className='w-full sm:w-1/2 flex flex-col justify-center items-center py-10'>
       <div>
         <div className='flex items-center text-sm md:text-base gap-2'>
          <p className='w-8 sm:w-11 h-[2px] bg-gray-400'></p>
          <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
        </div>

        <p className='text-3xl lg:text-5xl py-3 prata-regular'>Latest Arrivals</p>

        <div className='flex items-center gap-2 '>
          <p className='font-semibold text-sm md:text-base ' >SHOP NOW</p>
          <p className='w-8 sm:w-11 h-[2px] bg-gray-400'></p>
        </div>
       </div>
      </div>
      {/* Right Div */}
      <div className='w-full sm:w-1/2'>
       <img src={assets.hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
import React from 'react'
import {assets} from '../assets/assets'
const Hero = () => {
  return (
   <div className='flex border border-gray-400 flex-col sm:flex-row '>
    {/* Hero left side */}
    <div className='w-full sm:w-1/2 flex flex-col items-center justify-center p-2'>
    <p>OUR BESTSELLERS</p>
    <h1 className='prata-regular text-2xl'>Laest Arrivals</h1>
    <p>SHOP NOW</p>
    </div>
    <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />

   </div>
  )
}

export default Hero
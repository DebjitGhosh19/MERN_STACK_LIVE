import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img className='w-36  mb-5' src={assets.logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, fugiat saepe. Doloribus esse architecto iure quia doloremque veritatis, excepturi labore voluptatum tenetur nesciunt minus debitis.</p>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>Home</li>
          <li>About us</li>
          <li>Delivary</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+91-55-66-77</li>
          <li>contact@forever.com</li>
        </ul>
      </div>
      </div>
    <div>
      <hr />
      <p className='text-center text-sm py-5'>Copyright 2025@ forever.com-All Right Reserved.</p>
    </div>
    </div>
  )
}

export default Footer
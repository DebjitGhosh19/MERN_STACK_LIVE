import React from 'react'
import { CircleChevronDown } from 'lucide-react';
const Header = () => {
  return (
    <div className=' flex w-[100%] items-center justify-between bg-gradient-to-b from-black to-white px-4 py-2'>
      <img className='w-48' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
      <div className='flex items-center'>
      <CircleChevronDown size="24px"/>
        <h1 className='font-semibold text-lg'>Debjit</h1>
        <button className='bg-red-800 text-white p-2 ml-2'>Logout</button>
        <button className='bg-red-800 text-white p-2 ml-2'>Search Movie</button>
      </div>
    </div>
  )
}

export default Header
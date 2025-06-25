import React from 'react'

const Title = ({text1,text2}) => {
  return (
  
    <div className='flex justify-center items-center gap-2'>
        <p className='text-xl sm:text-2xl lg:text-2xl text-gray-400 font-medium'>{text1} <span className='text-black'>{text2}</span></p>
        <p className='w-8 sm:w-11 h-[2px] bg-gray-700'></p>
    </div>
   

   
  )
}

export default Title
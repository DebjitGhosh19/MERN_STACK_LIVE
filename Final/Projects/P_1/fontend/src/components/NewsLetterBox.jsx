import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandelar=(event)=>{
    event.preventDefault();

  }
  return (
    <div className='text-center flex flex-col items-center justify-center gap-2 my-10'>
      <p className='font-medium text-2xl '>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form onSubmit={onSubmitHandelar} className='outline w-full sm:w-1/2  items-center flex gap-3  my-6 border cursor-pointer'>
        <input className='p-2 w-full sm:flex-1 outline-none' type="email"  placeholder='Enter your email' required/>
        <button className=' px-10 py-4 bg-black text-white uppercase text-xs cursor-pointer' type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandelar=(event)=>{
    event.preventDefault();
  }
  return (
    <div className='text-center'>
      <p className='font-medium text-2xl text-gray-800 '>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <form onSubmit={onSubmitHandelar} action="" className='border flex w-full sm:w-1/2 items-center gap-3 mx-auto my-6 pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
        <button className='bg-black text-white  cursor-pointer text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
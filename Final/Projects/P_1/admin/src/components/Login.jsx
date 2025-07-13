import React from 'react'

const Login = () => {
  return (
   <div className='w-full h-screen border border-amber-600 flex items-center justify-center'>
     <div className='w-96 h-70 border flex flex-col p-5'>
      <h1 className='text-2xl font-bold pb-3'> Admin Panel</h1>
      <form className='text-sm flex flex-col gap-3 ' >
       <div className='flex flex-col'>
         <label htmlFor="email">Email Address</label>
        <input  type="text" className='w-[90%] border border-gray-400 p-2 rounded-[5px]' />
       </div>
       <div className='flex flex-col'>
         <label htmlFor="password">Password</label>
        <input type="password" className='w-[90%] p-2 border border-gray-400 rounded-[5px]' />
       </div> 
        <button className='w-[90%] bg-black text-white p-2 rounded-[5px] text-[15px]'>Login</button>
      </form>
    </div>
   </div>
  )
}

export default Login
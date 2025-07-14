import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmitHandelar=async(e)=>{
    try {
      e.preventDefault();
       
      
    } catch (error) {
      
    }
  }
  return (
   <div className='w-full h-screen flex items-center justify-center'>
     <div className='w-96 h-75  flex flex-col px-8 py-6 shadow-md bg-white rounded-lg'>
      <h1 className='text-2xl font-bold mb-3 pl-5  '> Admin Panel</h1>
      <form onSubmit={onSubmitHandelar} className='text-sm flex flex-col gap-5  justify-center items-center' >
       <div className='flex flex-col'>
         <label className='mb-2 text-sm font-medium text-gray-700' htmlFor="email">Email Address</label>
        <input onChange={(e)=>setEmail(e.target.value)}  type="text" className='w-75 border border-gray-400 p-2 rounded-[5px] outline-0'  placeholder='your@email.com' required/>
       </div>
       <div className='flex flex-col'>
         <label className='mb-2 text-sm font-medium text-gray-700'  htmlFor="password">Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" className='w-75 p-2 border border-gray-400 rounded-[5px]  outline-0' placeholder='Enter your password' />
       </div> 
        <button type='submit' className='w-75 bg-black text-white p-2 rounded-[5px] text-[15px]'>Login</button>
      </form>
    </div>
   </div>
  )
}

export default Login
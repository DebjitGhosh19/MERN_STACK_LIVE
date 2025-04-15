import React from 'react'
import Header from './Header'
import backgroundImage from '../assets/netflix-background.jpg'
const Login = () => {
  return (
    <div   className="h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
   <Header/>
   <form action="" className='bg-black w-3/12 text-white mx-auto mt-[10%] p-4 flex-col opacity-90 '>
    <h1 className='text-center font-medium text-4xl'>Sign In</h1>
    <div className='flex flex-col m-auto'>
    <input type="text" placeholder='Full Name'  className='bg-gray-800 p-4 m-4'/>
    <input className='bg-gray-800 p-4 m-4' type="email" name="email" id="email" placeholder='Email' />
    <input className='bg-gray-800 p-4 m-4' type="password" name="password"  id="password" placeholder='Password' />
    </div>
   </form>
    </div>
  )
}

export default Login
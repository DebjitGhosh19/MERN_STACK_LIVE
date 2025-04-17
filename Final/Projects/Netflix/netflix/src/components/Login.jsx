import React, { useState } from 'react'
import Header from './Header'
import backgroundImage from '../assets/netflix-background.jpg'
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
const handelInputData=(e)=>{
  e.preventDefault();
  console.log(fullname,email,password);
  setfullname("");
  setemail("");
  setpassword("");
}
  return (
    <div   className="h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
   <Header/>
   <form onSubmit={handelInputData} action="" className='bg-black w-3/12 text-white mx-auto mt-[5%]  flex-col opacity-90 p-12 min-w-[300px] rounded-md'>
   <h1 className='text-center font-medium text-4xl mb-2'>{isLogin?"Login":"Signup"}</h1>
    <div className='flex flex-col'>
    {!isLogin&&<input value={fullname} onChange={(e)=>setfullname(e.target.value)} type="text" placeholder='Full Name'  className='bg-gray-800 p-4 m-2 focus:outline-none'/>}
    <input value={email} onChange={(e)=>setemail(e.target.value)} className='bg-gray-800 p-4 m-2 focus:outline-none' type="email" name="email" id="email" placeholder='Email' />
    <input value={password} onChange={(e)=>setpassword(e.target.value)} className='bg-gray-800 p-4 m-2 focus:outline-none' type="password" name="password"  id="password" placeholder='Password' />
    <button className='bg-red-600 p-4 m-2'>{isLogin?"Login":"Signup"}</button>
    <p className='m-4 '>{isLogin?"New to Netflix?":"Already have an account?"} <span className='ml-1 text-blue-700 font-medium cursor-pointer' onClick={()=>setIsLogin(!isLogin)}>{isLogin?"Signup":"Login"}</span> </p>
    </div>
   </form>
    </div>
  )
}

export default Login
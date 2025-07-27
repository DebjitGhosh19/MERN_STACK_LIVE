import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShowpContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [pageHeading, setpageHeading] = useState("Login");
  const {token,setToken,navigate,baclend_Url}=useContext(ShopContext);
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmmit=async(event)=>{
    event.preventDefault()
    try {
      if (pageHeading=='Sign Up') {
        const response=await axios.post(baclend_Url+'/api/user/register',{name,email,password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
      } else {
         const response=await axios.post(baclend_Url+'/api/user/login',{email,password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  }
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])
  
  return (
    <form onSubmit={handleSubmmit} className="my-20 flex flex-col items-center ">
      <div className="flex gap-2 items-center justify-center">
        <h1 className="text-3xl prata-regular">{pageHeading}</h1>
        <p className="w-8 bg-black h-[2px] "></p>
      </div>
      <div className="flex flex-col w-[90%] gap-4 mt-8 sm:w-96">
        {pageHeading == "Sign Up" ? (
          <input onChange={(e)=>setName(e.target.value)} className="border  p-2" type="text" placeholder="Name" required />
        ) : (
          ""
        )}
        <input onChange={(e)=>setEmail(e.target.value)} className="border p-2 " type="email" placeholder="Email"  required/>
        <input onChange={(e)=>setPassword(e.target.value)} className="border  p-2" type="password" placeholder="Password"  required/>
      </div>
      <div className="flex justify-between  mt-2 w-[90%] sm:w-96 ">
        <p className="cursor-pointer">Forgot your password ?</p>
        <p className="cursor-pointer">
          {pageHeading === "Sign Up" ? (
            <p onClick={() => setpageHeading("Login")}>Login Here</p>
          ) : (
            <p onClick={() => setpageHeading("Sign Up")}>Create account</p>
          )}
        </p>
      </div>
      <button className="bg-black text-white py-2 px-8 mt-4 cursor-pointer">{pageHeading=='Sign Up'?'Sign Up':'Sign In'}</button>
    </form>
  );
};

export default Login;

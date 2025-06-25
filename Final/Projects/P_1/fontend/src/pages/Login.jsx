import React, { useState } from "react";

const Login = () => {
  const [pageHeading, setpageHeading] = useState("Sign Up");
  const handleSubmmit=async(event)=>{
    event.preventDefault()
  }
  return (
    <form onSubmit={handleSubmmit} className="my-20 flex flex-col items-center ">
      <div className="flex gap-2 items-center justify-center">
        <h1 className="text-3xl prata-regular">{pageHeading}</h1>
        <p className="w-8 bg-black h-[2px] "></p>
      </div>
      <div className="flex flex-col w-[90%] gap-4 mt-8 sm:w-96">
        {pageHeading == "Sign Up" ? (
          <input className="border  p-2" type="text" placeholder="Name" required />
        ) : (
          ""
        )}
        <input className="border p-2 " type="email" placeholder="Email"  required/>
        <input className="border  p-2" type="password" placeholder="Password"  required/>
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

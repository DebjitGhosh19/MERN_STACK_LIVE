import React, { useRef } from 'react'

const UseRefHook_5 = () => {
  const userName=useRef();
  const password=useRef();
  const handelar=(event)=>{
    event.preventDefault();
   const user=userName.current.value;
   const pass=password.current.value;
   console.log({user,pass});
  }
  return (
    <form onSubmit={handelar}>
      <div>
        <label htmlFor="UserName">UserName</label>
        <input type="text" name="UserName" id="UserName" ref={userName}/>
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" ref={password}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default UseRefHook_5
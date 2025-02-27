import React, { useRef } from 'react'

const UserHook_4 = () => {
  const userRef=useRef();
  const passRef=useRef();
const handelar=(e)=>{
  e.preventDefault();
  const name=userRef.current.value;
  const pass=passRef.current.value;
  console.log({name,pass});
  
}
  return (
    <form onSubmit={handelar}>
    <div>
      <label htmlFor="userName">userName </label>
      <input type="text" name="userName" id="userName" ref={userRef}/>
    </div>
    <div>
      <label htmlFor="password">password </label>
      <input type="password" name="password" id="password"  ref={passRef}/>
    </div>
    <button type="submit">Submit</button>
  </form>
  )
}

export default UserHook_4
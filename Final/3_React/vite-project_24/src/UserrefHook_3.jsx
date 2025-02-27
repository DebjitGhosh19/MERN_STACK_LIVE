import React, { useRef } from 'react'

const UserrefHook_3 = () => {
  const UserNameRef=useRef();
  const PasswordRef=useRef();
const handelar=(e)=>{
  e.preventDefault();
  const user=UserNameRef.current.value
  const pass=PasswordRef.current.value
  console.log({user,pass});
  
  
}
  return (
   <form onSubmit={handelar}>
    <div>
      <label htmlFor="UserName">UserName: </label>
      <input type="text" name="UserName" id="UserName" ref={UserNameRef}/>
    </div>
    <div>
      <label htmlFor="Password">Password: </label>
      <input type="password" name="Password" id="Password" ref={PasswordRef} />
    </div>
    <button type="submit">Submit</button>
   </form>
  )
}

export default UserrefHook_3
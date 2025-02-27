import React, { useRef } from 'react'

const UserRefHook_2 = () => {
  const UserNameRef=useRef();
  const Password=useRef();
const handelar=(e)=>{
  e.preventDefault();
  const user=UserNameRef.current.value;
  const pass=Password.current.value;
  console.log({user,pass});
  
}
  return (
    <form onSubmit={handelar}>
      <div>
        <label htmlFor="UserName">UserName:</label>
        <input type="text" name="UserName" id="UserName" ref={UserNameRef}/>
      </div>
      <div>
        <label htmlFor="Password">Password:</label>
        <input type="password" name="Password" id="Password"ref={Password} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserRefHook_2
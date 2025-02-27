import React,{useRef} from 'react'

const UseRefHook_1 = () => {
const UserNameRef=useRef();
const PasswordRef=useRef();
const handelar=(e)=>{
  e.preventDefault();
  const use=UserNameRef.current.value;
  const pass=PasswordRef.current.value;
  console.log({use,pass});
  
}
  return (
   <form onSubmit={handelar}>
    <div>
      <label htmlFor="UserName">Name: </label>
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

export default UseRefHook_1
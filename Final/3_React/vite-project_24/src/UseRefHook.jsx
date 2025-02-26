
import { useRef } from 'react'

const UseRefHook = () => {
  const UserName=useRef()
  const Password=useRef()
 const handelar=(event)=>{
    event.preventDefault()
    let userName=UserName.current.value;
    let password=Password.current.value;
console.log({userName,password});

  }
  return (
   <form action="" onSubmit={handelar}>
    <div>
      <label htmlFor="userName">UserName</label>
      <input type="text" name="userName" id="userName" ref={UserName}/>
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" ref={Password} />
    </div>
    <button type="submit">Submit</button>
   </form>
  )
}

export default UseRefHook
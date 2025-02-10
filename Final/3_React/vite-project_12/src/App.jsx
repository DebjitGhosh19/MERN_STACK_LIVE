import './style.css'
import React,{useState} from 'react';
function App() {
  
const [User, setUser] = useState({name:'',email:'',password:''});
const {name,email,password}=User
const handelChange=(e)=>{
  setUser({...User,[e.target.name]:e.target.value})
}
const subitHandel=(e)=>{
  console.log(User);
  e.preventDefault();
  
}
  return (
   <>
   <h1>Registration form</h1>
   <form action="" onSubmit={subitHandel}>
    <div>
      <label htmlFor="name">Name </label>
      <input type="text" name="name" id="name" value={name} required onChange={handelChange} />
    </div>
    <div>
      <label htmlFor="email">Email </label>
      <input type="email" name="email" id="email" value={email} required onChange={handelChange} />
    </div>
    <div>
    <label htmlFor="password">Password </label>
    <input type="password" name="password" id="password" value={password}required onChange={handelChange} />
    </div>
    <button type="submit">Submit</button>
   </form>
   </>
  )
}

export default App

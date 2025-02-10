import React,{useState} from 'react'
import Style from './Style.module.css'

const Form = () => {
  // const [name, setname] = useState('');
  // const [email, setemail] = useState('');
  // const [password, setpassword] = useState('');
  const [user, setuser] = useState({name:'',email:'',password:''});
  const {name,email,password}=user;

  // const handelName=(e)=>{
  //   setuser({name:e.target.value,email,password});
  // }
  // const handelEmail=(e)=>{
  //   setuser({name,email:e.target.value,password})
  // }
  // const handelPassword=(e)=>{
  //  setuser({name,email,password:e.target.value})
  // }
const handelChange=(e)=>{
  setuser({...user,[e.target.name]:e.target.value});
}
  const handelSubmit=(e)=>{
    console.log(user);
    
    
    e.preventDefault()
    
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form action="" onSubmit={handelSubmit}>
      <div className={Style.dives}>
      <label htmlFor="name">Name : </label>
        <input type="text" name='name'   value={name} id='name' required onChange={handelChange}/>
      </div>
      <div className={Style.dives}>
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" value={email} onChange={handelChange} />
      </div>
      <div className={Style.dives}>
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" id="password" value={password} onChange={handelChange} />
      </div>
      <button className={Style.btn} >Submit</button>
      <div>

      </div>
      </form>
    </div>
  )
}

export default Form
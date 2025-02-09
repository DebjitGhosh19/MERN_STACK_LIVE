import React,{useState} from 'react'
import Style from './Style.module.css'

const Form = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handelName=(e)=>{
    setname(e.target.value);
  }
  const handelEmail=(e)=>{
    setemail(e.target.value);
  }
  const handelPassword=(e)=>{
    setpassword(e.target.value);
  }

  const handelSubmit=(e)=>{
    
    let userInfo={
      name,
      email,
      password
    };
    console.log(userInfo);
    
    
    e.preventDefault()
    
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form action="" onSubmit={handelSubmit}>
      <div className={Style.dives}>
      <label htmlFor="name">Name : </label>
        <input type="text" name='name'   value={name} id='name' required onChange={handelName}/>
      </div>
      <div className={Style.dives}>
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" value={email} onChange={handelEmail} />
      </div>
      <div className={Style.dives}>
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" id="password" value={password} onChange={handelPassword} />
      </div>
      <button className={Style.btn} >Submit</button>
      <div>

      </div>
      </form>
    </div>
  )
}

export default Form
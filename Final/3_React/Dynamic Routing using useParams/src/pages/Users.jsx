import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
const Users = () => {
  // const {userId}=useParams();
  const [searchParams,setSearchParams]=useSearchParams();
  const [name, setName] = useState("")
// console.log();
const handelSubmit=(event)=>{
  event.preventDefault();
  setSearchParams({"name":name})
}

  
  return (
    <div>
      <form onSubmit={handelSubmit}>
      <input type="text" name="deno" id="demo" value={name} onChange={(e)=>{
        setName(e.target.value)
      }}/>
      <button>Find user</button>
      </form>
     <h1> Users:{searchParams.get("id")}</h1>
      </div>
  )
}

export default Users
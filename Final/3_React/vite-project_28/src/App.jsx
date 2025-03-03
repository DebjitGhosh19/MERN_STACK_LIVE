import { useState } from 'react'

import './App.css'
import Users from './Users'
import NewUser from './NewUser'


function App() {
  const [users, setUsers] = useState([{id:1,userName:"Debjit"},{id:2,userName:"Ram Dev"}])
const handelDelete=(id)=>{
const filterUsers=users.filter((user)=>user.id!==id)
setUsers(filterUsers)

}
const AddHandelar=(newUser)=>{
setUsers((previousState)=>{
  return [...previousState,newUser]
})

}
  return (
    <>
   
       <NewUser AddHandelar={AddHandelar}/>
     
   
<Users users={users} handelDelete={handelDelete}/>
    </>
  )
}

export default App

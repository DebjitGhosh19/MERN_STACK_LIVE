import React,{useContext} from 'react'
import User from './User'
import { UserContext } from './Contex/UserContext'

const Users = () => {
  const {users,setUsers} = useContext(UserContext)
  return (
    <section>
      {users.map(user=>{
        return <User key={user.id} user={user} />
      })}
    </section>
  )
}

export default Users
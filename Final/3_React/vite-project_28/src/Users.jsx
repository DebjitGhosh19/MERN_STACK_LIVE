import React from 'react'
import User from './User'

const Users = ({users,handelDelete}) => {
  return (
    <section>
      {users.map(user=>{
        return <User key={user.id} user={user} handelDelete={handelDelete}/>
      })}
    </section>
  )
}

export default Users
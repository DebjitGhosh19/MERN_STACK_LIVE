import React from 'react'

const Users = ({item}) => {
  return (
    <div>
      <p>{item.id}</p>
        <p className='Username'>{item.name}</p>
        <p>{item.email}</p>
        <p>{item.phone}</p>
    </div>
  )
}

export default Users
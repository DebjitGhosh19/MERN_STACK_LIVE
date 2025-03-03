import React,{useContext} from 'react'
import { UserContext } from './UserContext'
const Components_4 = () => {
  const {user,first} = useContext(UserContext)
  return (
    <div><p>{user.id}</p>
    <p>{first.Roll}</p>
    </div>
  )
}

export default Components_4
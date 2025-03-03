import React,{useState} from 'react'
import Components_2 from './Components_2'
import { UserContext } from './UserContext'

const Component_ = () => {
  const [user, setuser] = useState({id:101,name:"Debjit Ghosh"})
  const [first, setfirst] = useState({Roll:19})
  return (
    <UserContext.Provider value={{user,first}}>
      <Components_2/>
      </UserContext.Provider>
  )
}

export default Component_
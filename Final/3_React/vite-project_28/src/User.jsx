import React,{useContext} from 'react'
import { UserContext } from './Contex/UserContext';

const User = ({user}) => {
  const {users, setUsers} = useContext(UserContext)
  const articleStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer'
  };
const onclickhandelDelete=(id)=>{
  const filterUsers=users.filter((user)=>user.id!==id)
setUsers(filterUsers)

}
  return (
    <article style={articleStyle}>
      <h3>{user.id}</h3>
      <p>{user.userName}</p>
      <button type="submit" style={buttonStyle} onClick={()=>{onclickhandelDelete(user.id)}}>Delete</button>
    </article>
  )
}

export default User
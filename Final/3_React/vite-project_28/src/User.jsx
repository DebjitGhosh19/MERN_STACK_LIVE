import React from 'react'

const User = ({user,handelDelete}) => {
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
  handelDelete(id)

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
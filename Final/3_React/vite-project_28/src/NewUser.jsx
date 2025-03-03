import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewUser = ({ AddHandelar }) => {
  const [newUser, setnewUser] = useState("");
  
  const inputHandler = (event) => {
    setnewUser(event.target.value);
  };

  const SubmitHandelar = (event) => {
    event.preventDefault();
    const NewUser = { id: uuidv4(), userName: newUser };
    AddHandelar(NewUser);
    setnewUser("");
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '300px',
    margin: '0 auto'
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%'
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer'
  };

  return (
    <form onSubmit={SubmitHandelar} style={formStyle}>
      <label htmlFor="UserName">UserName: </label>
      <input
        type="text"
        placeholder='Enter your name'
        value={newUser}
        onChange={inputHandler}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
};

export default NewUser;
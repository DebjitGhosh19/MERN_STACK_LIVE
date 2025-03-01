import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const UseReducer = () => {
  const booksData=[{
    id:1,name:"One"
  },{
    id:2,name:"Two"
  },
{
  id:3,name:"Three"
}]
const [books, setbooks] = useState(booksData)
const [addbook,setAddbook]=useState("");
const handelar=(e)=>{
  e.preventDefault();
  setbooks((previous)=>{
    const newBook={id:uuidv4(),name:addbook}
    return [...previous,newBook]
  })
}

  return (
    <>
  <h1>Books List</h1>
  <form onSubmit={handelar}>
    <label htmlFor="bookName">Book Name:</label>
    <input type="text" value={addbook} onChange={(e)=>setAddbook(e.target.value)} />
    <button type="submit">Submit</button>
  </form>
  {
    books.map((book)=>{
      let  {id, name}=book;
      return <li key={id}>{name}</li>
    })
  }
    </>
  )
}

export default UseReducer
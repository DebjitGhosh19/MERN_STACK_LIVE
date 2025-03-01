import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
const Modal=({ModalText})=>{
 return <p>{ModalText}</p>
}
const UseReducer_2 = () => {
  const BookList=[{
    id:1,
    name:"Book_1"
  },{
    id:2,
    name:"Book_2"
  }
,{
  id:3,
  name:"Book_3"
}]
const [Books, setBooks] = useState(BookList);
const [booklist, setbooklist] = useState("");
const [Modals, setModal] = useState(false)
const [ModalText, setModalText] = useState("")

const handelar=(e)=>{
e.preventDefault();
setBooks((previousSate)=>{
  const newBook={id:uuidv4(),name:booklist}
  return [...previousSate,newBook]
})
setModal(true);
setModalText("Add Book")
}
  return (
    <>
    <h1>Book List</h1>
    <form onSubmit={handelar}>
      <div >
        <label htmlFor="UserName">UserName</label>
        <input type="text" value={booklist} onChange={(e)=>setbooklist(e.target.value)}/>
        <button type="submit">Submit</button>
      </div>
    </form>
    {
     Modals && <Modal ModalText={ModalText}/>
    }
    {
      Books.map((book)=>{
        const {id,name}=book;
        return <li key={id}>{name}</li>
        
      })
    }
    
    </>
  )
}

export default UseReducer_2
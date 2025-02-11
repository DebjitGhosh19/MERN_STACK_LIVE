import React,{useState} from 'react'

const NewToDo = ({newTodoHandelar}) => {
  const [newTodo, setnewTodo] = useState("");
  const changeHandelar=(e)=>{
    setnewTodo(e.target.value);
       }
       const submitHandelar=(e)=>{
        newTodoHandelar(newTodo)
        e.preventDefault();
       }
  return (
    <form action="" onSubmit={submitHandelar}>
      <label htmlFor="newTodo">New ToDo: </label>
      <input type="text" name="newTodo" id="newTodo" value={newTodo} onChange={changeHandelar}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewToDo
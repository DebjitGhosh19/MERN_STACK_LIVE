  import React from 'react'
  
  const Todo = ({todo}) => {
 
    
    return (
     <>
     <h1>{todo.todo.title}</h1>
     <p>{todo.todo.desc}</p>
     <button>delete</button>
     </>
    )
  }
  
  export default Todo
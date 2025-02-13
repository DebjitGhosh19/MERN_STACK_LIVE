import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Todos from './Todos'
import style from"./home.module.css"
import NewToDo from './NewToDo'
const Home = () => {
  
const [todos, setState] = useState([]);


const db = (Newtodos) => {
  setState((prevTodos)=>{
    return [...prevTodos,{id:uuidv4(),todos:Newtodos}]
  })
  console.log(todos);
};
const removeHandelar=(id)=>{
  setState((prevTodos)=>{
    const filterTodos=prevTodos.filter((todo)=>todo.id!==id)
  return filterTodos

  })
}

  return (<div className={style.contener} >
    <h1>Todo App</h1>
    <NewToDo db={db}/>
    <Todos demoTodo={todos} removeHandelar={removeHandelar}/>
    </div>
  )
}

export default Home
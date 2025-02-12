import React, { useState } from 'react'

import Todos from './Todos'
import style from"./home.module.css"
import NewToDo from './NewToDo'
const Home = () => {
  const demoTodo=[
{
  id:1,
  title:"Todo title 1",
  desc:"Todo Description",
},
{
  id:2,
  title:"Todo title 2",
  desc:"Todo Description",
}
  ]
const [state, setState] = useState({ id: '', title: '', desc: '' });
const { id, title, desc } = state;

const db = (data) => {
  setState((prevState) => ({
    ...prevState,
    ...data
  }));
  console.log(data);
};

  return (<div className={style.contener} >
    <h1>Todo App</h1>
    <NewToDo db={db}/>
    <Todos demoTodo={demoTodo}/>
    </div>
  )
}

export default Home
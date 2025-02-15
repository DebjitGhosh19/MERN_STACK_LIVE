import React from 'react'
import Todo from './Todo';
import style from './todos.module.css'
const Todos = ({demoTodo,removeHandelar}) => {
  return <section className={style.todos}>
    {demoTodo.map((item)=>{
      return <Todo key={item.id} item={item} removeHandelar={removeHandelar}/>
    })}
  </section>
}

export default Todos;
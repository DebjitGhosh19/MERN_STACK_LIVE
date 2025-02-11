import React from 'react'
import Todo from './Todo';

const Todos = ({demoTodo}) => {
  return <section>
    {demoTodo.map((item)=>{
      return <Todo key={item.id} item={item}/>
    })}
  </section>
}

export default Todos;
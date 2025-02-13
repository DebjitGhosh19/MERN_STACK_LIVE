import React from 'react'
import style from './todo.module.css'
const Todo = ({item,removeHandelar}) => {
  console.log(item);
  const handelDelete=(id)=>{
    removeHandelar(id);
    
  }
  return <>
    <article className={style.arti}>
      <div>
    <h3>
    {item.todos.title}
    </h3>
    <p>
      {item.todos.desc}
    </p>
    </div>
    <div>
    <button onClick={()=>{
      handelDelete(item.id)
    }} className={style.btn}>
    <i className="fa fa-trash fa-2x "></i>
    </button>
    </div>
    </article>
    </>
}

export default Todo
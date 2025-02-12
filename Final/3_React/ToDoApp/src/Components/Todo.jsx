import React from 'react'
import style from './todo.module.css'
const Todo = ({item}) => {
  return <>
    <article className={style.arti}>
      <div>
    <h3>
    {item.title}
    </h3>
    <p>
      {item.desc}
    </p>
    </div>
    <div>
    <button className={style.btn}>
    <i className="fa fa-trash fa-2x "></i>
    </button>
    </div>
    </article>
    </>
}

export default Todo
import React from 'react'
import Todo from './Todo'

const Todos = ({todos}) => {
  return <>
  {
    todos.map((item,index)=>(
     <Todo key={index} item={item} />
    ))
  }
  </>
}

export default Todos
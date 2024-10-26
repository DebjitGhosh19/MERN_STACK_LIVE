import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({todoItems}) => {
  return (
    <>
     <div>
      {todoItems.map(item=> <TodoItem TodoDate={item.dueDate} TodoItem={item.name} />)}
      </div>
   
    </>
  )
}

export default TodoItems
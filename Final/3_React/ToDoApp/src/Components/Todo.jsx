import React from 'react'

const Todo = ({item}) => {
  return <div>
    <article>
    <div>
    {item.title}
    </div>
    <div>
      {item.desc}
    </div>
    </article>
    </div>
}

export default Todo
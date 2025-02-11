import React from 'react'
import Todos from './Todos'

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

  return (
    <Todos demoTodo={demoTodo}/>
  )
}

export default Home
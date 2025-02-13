import React from 'react'
import Todo from './Todo'

const Todos = ({data}) => {

  return (
    <>
    {data.map((item)=>{    
      return <Todo key={item.id} todo={item}/>
    })}
    </>
  )
}

export default Todos
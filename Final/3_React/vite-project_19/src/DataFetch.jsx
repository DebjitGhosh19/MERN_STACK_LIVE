
import React, { useState,useEffect } from 'react'


const dataFetch = () => {
  const [todos, settodos] = useState([])
  useEffect(()=>{
  
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
      return res.json()})
        .then((data)=>{
           settodos(data)
        })
  },[])
  return (
    <div>
      <h1>{todos.length > 0 ? todos.map((item)=><p>{item.name}</p>) : 'Loading...'}</h1>
    </div>
  )
}

export default dataFetch
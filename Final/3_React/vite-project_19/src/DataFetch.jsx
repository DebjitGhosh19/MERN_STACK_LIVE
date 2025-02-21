
import React, { useState,useEffect } from 'react'


const dataFetch = () => {
  const [todos, settodos] = useState([])
  useEffect(()=>{
  
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
      if(!res.ok){
        throw new Error("Data featching is not successful")
      }
      return res.json()})
        .then((data)=>{
           settodos(data)
        }).catch((error)=>{
          console.log(error);
          
        })
  },[])
  return (
    <div>
      <h1>{todos.length > 0 ? todos.map((item)=><p>{item.name}</p>) : 'Loading...'}</h1>
    </div>
  )
}

export default dataFetch
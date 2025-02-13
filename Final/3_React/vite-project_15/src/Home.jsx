import React,{useState} from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
import { v4 as uuidv4 } from 'uuid';
const Home = () => {
  const [todo, settodo] = useState([])
const inputHandler=(newTodo)=>{
 
  settodo((previousState)=>{
    return [...previousState,{id:uuidv4(),todo:newTodo}]
  })  
  
}


  return (<>
  <NewTodo input={inputHandler}/>
  <h1>Todo App</h1>
  <Todos data={todo}/>
  
  </>
  )
}

export default Home
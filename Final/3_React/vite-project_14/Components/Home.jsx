import React,{useState} from 'react'
import Todos from './Todos';
import NewToDo from './NewToDo';
const demotodos=["item1","item2"];
const Home = () => {
  const [todos, settodos] = useState(demotodos);
  const newTodoHandelar=(data)=>{
    settodos([...todos,data]);
  }
  return <>
    <NewToDo newTodoHandelar={newTodoHandelar}/>
    <Todos todos={todos}/>
    </>
  
}

export default Home
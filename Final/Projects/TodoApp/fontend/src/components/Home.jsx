import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [newTodo,setNewTodo]=useState("")
useEffect(() => {
  const fetchTodos = async () => {
   try {
    setLoading(true);
    const response = await axios.get('http://localhost:5000/todo/fetch',{
withCredentials:true,
headers:{
  'Content-Type': 'application/json',
}
    });
    console.log(response.data.fetchTodo
    );
    
    setTodo(response.data.fetchTodo);
    setError(null)
   } catch (error) {
    setError("Failed to fetch todos")
   } finally {
    setLoading(false);
   }
    
  }
fetchTodos()
},[])

const createTodos=async()=>{
  if(!newTodo) return;
  try {
const response =await axios.post("http://localhost:5000/todo/create",{
  text:newTodo,
  completed:false
},{
  withCredentials:true,
})
setTodo([...todo,response.data])
setNewTodo("")
  } catch (error) {
    setError('Faild to create todo')
  }
}
const todoSatus=async(id)=>{
  const Todo=todo.find((t)=>t._id==id)
  try {
    const response=await axios.put(`http://localhost:5000/todo/update/${id}`,{
      ...todo,
      completed:!todo.completed
    },{
      withCredentials:true
    })
    console.log(response.data);
    
    setTodo(Todo.map((t)=>t._id===id?response.data.todo:t))
  } catch (error) {
    setError("Failed to find todo status")
  }
}
const todoDelete=async (id)=>{
  try {
   await axios.delete(`http://localhost:5000/todo/delete/${id}`,{
    withCredentials:true
   })
   setTodo(todo.filter((t)=>t._id!==id));
  } catch (error) {
    setError("Failed to delete todo")
  }

}
const handelClick=(e)=>{
e.preventDefault();

}
  return (
    <div className='flex justify-center pt-4'>
    <div className='bg-gray-100 max-w-lg lg:min-w-2/5 p-4 shadow-lg'>
   <h1 className='text-center text-xl font-semibold mb-4'>Todo App</h1>
   <form className='mb-4'>
    <input className='w-4/5 bg-white p-1 rounded-l-sm focus:outline-none' type="text" placeholder='Add a new todo'/>
    <button className='w-1/5 bg-blue-700 text-white p-1 rounded-r-sm cursor-pointer '  onClick={()=>handelClick}>Add</button>
   </form>
   <ul>
   {todo.map((t,index)=>{
    return <li key={index} className='flex justify-between my-4'>
    <div className='flex w-4/5'>
      <input type="checkbox" checked={t.completed} onChange={()=>todoSatus(t._id)} className='mr-1'/>
      <p>{t.text}</p>
    </div>
    <button className='w-1/5 text-red-700 cursor-pointer'>Delete</button>
   </li>
   })}
   
   </ul>
   <div className='flex flex-col justify-center items-center'>
   <p className='text-center my-4'>2 todos remaining</p>
    <button className='bg-red-600 text-white w-18 p-1 rounded hover:bg-red-800 duration-500 cursor-pointer '>Logout</button>
    </div>
    </div>
    </div>
  )
}

export default Home
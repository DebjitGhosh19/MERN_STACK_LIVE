import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import './App.css'

function App() {
const handelar=()=>{
  toast.success('🦄 Wow so easy!', )
}

  return (
   <>
   <h1>Add Todo</h1>
   <button onClick={handelar}>AddTodos</button>
   <ToastContainer/>
   </>
  )
}

export default App

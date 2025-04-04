import { useMemo } from 'react';
import './App.css'
import Message from './Message'
import React, {  useCallback, useState } from 'react'
function App() {
  const [count, setcount] = useState(0)
  const [Toggle, setToggle] = useState(false);
  const handelincrement=useCallback(()=>{
    setcount(count=>count+1)
  },[count])

 const number=useMemo(() =>{
    let num=0;
 for (let index = 0; index < 5000000; index++){ 
   num++
  }
  return num
 }, [])
  return (
    <>
    <div>
      Number={number}
      <p>{Toggle?'off':'on'}</p>
      <button onClick={()=>setToggle(!Toggle)}>Toggle</button>
    </div>
      {console.log('app render')}
    <div>
      <p>count: {count}</p>
      <button onClick={()=>setcount(count=>count+1)}>Increment</button>
    </div>
     <Message messageSend={count} incremenHandel={handelincrement}/>
    </>
  )
}

export default App

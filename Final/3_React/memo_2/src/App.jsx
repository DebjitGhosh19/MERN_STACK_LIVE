
import './App.css'
import Message from './Message'
import React, {  useState } from 'react'
function App() {
  const [count, setcount] = useState(0)

  return (
    <>
      {console.log('app render')}
    <div>
      <p>count: {count}</p>
      <button onClick={()=>setcount(count=>count+1)}>Increment</button>
    </div>
     <Message messageSend={count}/>
    </>
  )
}

export default App

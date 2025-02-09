import './App.css'
import { useState } from 'react'
function App() {
 const [count, setcount] = useState(0)

const Add=()=>{
setcount(count+1)
}
const Sub=()=>{
  setcount(count-1)
}
const Reset=()=>{
  setcount(0)
}
  return (
   <>
   <div className='main'>
   <div className='section' >
    <h1>Counter App</h1>
    <div>
      
      <div className='Section_2'>
         <h2>Count: {count}</h2>
        <button onClick={Add} disabled={count===5?true:false}>+</button>
        <button onClick={Sub} disabled={count===-5?true:false}>-</button>
        <button onClick={Reset}>0</button>
      </div>
    </div>
   </div>
   </div>
   </>
  )
}

export default App

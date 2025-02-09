import React, { useState } from 'react'

const HooksUseState = () => {
  const [count, setCount] = useState(0);
  let Add=()=>{
    setCount(count+1)
  }
  let Add2=()=>{
    setCount((count)=>count+1);
    setCount((count)=>count+1);
  }
  let Sub=()=>{
    setCount(count-1)
  }

  return (
    <div>
      <h1>HooksUseState</h1>
      <h2>Count:{count}</h2>
      <button onClick={Add} disabled={count===10?true:false}>Increase</button>
      <button onClick={Add2} disabled={count===10?true:false}>Increase_2</button>
      <button onClick={Sub} disabled={count===0?true:false}>Decrease</button>
      </div>
  )
}

export default HooksUseState
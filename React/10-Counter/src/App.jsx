
import { useState } from 'react'

function App() {
  
const [start,Add]=useState(0);
const onClickHandlar=()=>{
  const sum=start+1;
  Add(sum);
}
  return (
    <>
     <button onClick={onClickHandlar}>Count:{start} </button>
    </>
  )
}

export default App

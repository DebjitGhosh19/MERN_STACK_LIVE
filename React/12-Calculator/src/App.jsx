import { useState } from "react"
import NumberPad from "./Components/NumberPad"
import Display from "./Components/Display"

function App() {
 const [diplayVal,setDisplayVal]=useState('')

  return (
    <>
     <Display text={diplayVal}/>
    <NumberPad displayVal={diplayVal} setDisplayVal={setDisplayVal}/>
    </>
  )
}

export default App

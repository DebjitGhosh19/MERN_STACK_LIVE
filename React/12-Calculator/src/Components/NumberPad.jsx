import React from 'react'
import Button from './Button'
const NumberPad = ({displayVal,setDisplayVal}) => {
  const operation=["+","-","*","/"];
  const buttons=["1","2","3","4","5","6","7","8","9","0","."];
  const AddToDisplay=(text)=>{
  setDisplayVal(displayVal+text)
      
  }
  const evalutDisplayValue=()=>{
    setDisplayVal(eval(displayVal));
  }
  return (
  <>
  <Button text={"C"} onClickHandler={()=>setDisplayVal('')}/>
  {buttons.map(item=><Button text={item} onClickHandler={()=>AddToDisplay(item)}/>)}
  <br/>
  {operation.map(item=><Button text={item}
  onClickHandler={()=>AddToDisplay(item)}/>)}
  <br />
  <Button text={"="} onClickHandler={evalutDisplayValue}/>
  </>
  )
}

export default NumberPad;
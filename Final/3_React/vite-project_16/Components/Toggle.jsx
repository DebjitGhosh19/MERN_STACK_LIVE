import React,{useState} from 'react'

const Toggle = ({que,ans}) => {
  const [toggle, settoggle] = useState(false)
  return (
    <div className='contener'>
    <div className='item'>
      <h4>{que}
    <br></br>
<br />
    {
      toggle &&
      <span> 
    {ans}
    </span>
    }
    
      </h4>
      <button onClick={()=>{
        settoggle(!toggle)
      }}>{
        toggle?"-":"+"}</button>
    </div>
    </div>
  )
}

export default Toggle
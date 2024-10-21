import React from 'react'

const Display = ({text}) => {
  return <>
    { text ? <p>{text}</p> : <p>0</p> }
      
    </>
   
}

export default Display
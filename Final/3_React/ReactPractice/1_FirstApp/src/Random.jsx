import React from 'react'

const Random = () => {
  let num=Math.round(Math.random()*100);
  return (
    <div style={{background:'lightgreen', margin:'5px'}}>Random:{num}</div>
  )
}

export default Random
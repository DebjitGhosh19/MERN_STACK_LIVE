import React from 'react'

const CurrentTime = () => {

   const Time=new Date();
  
  
  return (
    <p>This is the Current time:{Time.toLocaleDateString()}-{Time.toLocaleTimeString()}</p>
  )
}

export default CurrentTime
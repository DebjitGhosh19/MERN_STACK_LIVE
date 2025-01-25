import React from 'react'

const Clock = () => {
  const date= new Date();
  
  return (
    <p>This is the current time: {date.toLocaleDateString()}-{date.toLocaleTimeString()}</p>
  )
}

export default Clock
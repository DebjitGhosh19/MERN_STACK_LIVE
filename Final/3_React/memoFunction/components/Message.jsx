import React from 'react'
import { memo } from 'react';

const Message = () => {
  console.log("Message");
  
  return (
    <div>Message</div>
  )
}

export default memo(Message)
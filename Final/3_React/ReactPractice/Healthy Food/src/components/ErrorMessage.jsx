import React from 'react'

const ErrorMessage = ({foodItem}) => {

  return (
   <>
   {foodItem.length==0 && <h1>I am still hungry.</h1>}
   </>
  )
}

export default ErrorMessage
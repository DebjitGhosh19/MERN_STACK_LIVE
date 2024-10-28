import React from 'react'

const ErrorHandle = ({foods}) => {
  return (
    <>
    {foods.length==0&&<h1>I am still Hungri !</h1> } 
    </>
  )
}

export default ErrorHandle
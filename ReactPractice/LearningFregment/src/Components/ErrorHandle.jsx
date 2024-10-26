import React from 'react'

const ErrorHandle = ({foods}) => {
  return (
    <>
    {foods.length==0&&<h1>I am Hungri.</h1> } 
    </>
  )
}

export default ErrorHandle
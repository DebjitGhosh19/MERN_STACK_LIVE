import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({isLogin,children}) => {
 if (!isLogin) {
  return <Navigate to={'/'}/>

 }
 return children
}

export default Protected
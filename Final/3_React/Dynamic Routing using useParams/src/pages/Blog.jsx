import React from 'react'
import {  useLocation, useParams, } from "react-router"


const Blog = () => {
  let {title} = useParams()
const location=useLocation();
  return (
    <div>
<h1>{title}</h1>
<p>{location.state.body}</p>
    </div>
  )
}

export default Blog
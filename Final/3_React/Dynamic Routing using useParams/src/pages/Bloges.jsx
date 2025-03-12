import React, { useState } from 'react'
import { data } from '../../data'
import { Link } from 'react-router-dom'
const Bloges = () => {
  const [blogs, setblog] = useState(data)
  const tuncate=(str,value)=>{
    return str.slice(1, value)+"..."
  }
  return (
    <div>
    {

    blogs.map(blog=>{
      return <section key={blog.id}>
        <h3>{blog.title}</h3>
        <p>{tuncate(blog.body,100)}</p>
        <Link to={blog.title}>Lear More</Link>
      </section>
    })
      
    }

    </div>
  )
}

export default Bloges
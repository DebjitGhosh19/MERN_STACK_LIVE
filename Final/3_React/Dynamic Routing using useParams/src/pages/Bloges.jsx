import React, { useState, } from 'react'
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
      const {id,title,body}=blog
      return <section key={id}>
        <h3>{title}</h3>
        <p>{tuncate(body,100)}</p>
        <Link to={blog.title} state={{id,title,body}} >Learn More</Link>
      </section>
    })
      
    }

    </div>
  )
}

export default Bloges
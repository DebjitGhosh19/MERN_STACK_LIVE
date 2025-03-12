import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import { data } from '../../data'

const Blog = () => {
  let {title} = useParams()

   const [blogs, setblog] = useState(data)
   const [FilterData, setFilterData] = useState()
  useEffect(() => {
  const filterDAta=blogs.filter((blog)=>blog.title===title)
 
const body=filterDAta[0].body;
setFilterData(body)
  
  }, [])
  
  return (
    <div>
<h1>{title}</h1>
<p>{FilterData}</p>
    </div>
  )
}

export default Blog
import React from 'react'
import Countri from './Countri'

const Countries = ({countries}) => {
  return (
    <section>
      {
       countries.map((countri)=>{
        return <Countri countri={countri}/>
       })
      }
    </section>
  )
}

export default Countries
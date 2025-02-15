import React from 'react'
import data from './data.js'
import Toggle from './Toggle.jsx'

const FAQs = () => {

  
  return (
    <div className='main'>
      <h1 style={{textAlign:"center"}}>FAQs</h1>
      {
        data.map(item=> <Toggle que={item.question} ans={item.answer} key={item.id}/>)
      }
    </div>
  )
}

export default FAQs
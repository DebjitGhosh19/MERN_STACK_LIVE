import React from 'react'
import css from './Input.module.css'
const Input = () => {
const OnChangeHamdelar=(event)=>console.log(event.target.value)
  return (
    <input type="text" placeholder='Enter your product' className={css.input}
onChange={OnChangeHamdelar}
    />
  )
}

export default Input
import React from 'react'
import css from './Items.module.css'
const Items = ({item,handelar}) => {
  // const handelar=()=>{
  //   console.log(`${item} being brought`)
  // }
  return (
    <>
    <li  className={`${css.bg} "list-group-item"`}>
          <span className={css["text"]}> {item}</span>
          <button className={` ${css.buttons} btn btn-success` }
     onClick={handelar} 
     
          >Bye</button> 
    </li>
    </>
  )
}

export default Items
import React, { useState } from 'react'
import style from './newtodo.module.css'
const NewToDo = ({db}) => {
  
  const [State, setState] = useState({id:'',title:'',desc:''})
 const {title,desc} =State;
 const Handelar=(e)=>{
  setState({...State,[e.target.name]:e.target.value});
 }
  
  const handelSumit=(e)=>{
    e.preventDefault();
    db(State)
    
  }
  return (
    <form action="" onSubmit={handelSumit}>
      <div className={style.div1}>
        <label htmlFor="title" className={style.lable1}>Title: </label>
        <input type="text" name="title" id="title" className={style.input1} onChange={Handelar}  value={title}/>
      </div>
      <div>
        <label htmlFor="desc" className={style.lable1}>Desc: </label>
        <textarea name="desc" id="desc" className={style.input1 } onChange={Handelar} value={desc}></textarea>
      </div>
      <button className={style.btn} type='submit'>Submit</button>
    </form>
  )
}

export default NewToDo
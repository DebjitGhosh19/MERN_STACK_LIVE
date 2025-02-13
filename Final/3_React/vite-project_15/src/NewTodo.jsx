import React,{useState} from 'react'

const NewTodo = ({input}) => {
  const [first, setfirst] = useState({title:"",desc:""});
  const {title,desc}=first;
  const handelChange=(e)=>{
    setfirst({...first,[e.target.name]:e.target.value})
  }

  const handelSubmit=(e)=>{
    e.preventDefault();

    input(first)
    setfirst({title:"",desc:""})
  }
  return (
   <>
   <form action="" onSubmit={handelSubmit}>
    <div>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={title} onChange={handelChange}/>
      </div>
      <div>
      <label htmlFor="desc">Desc</label>
     <textarea name="desc" id="desc" value={desc} onChange={handelChange}></textarea>
      </div>
      <button>Submit</button>
    </form>   
   </>
  )
}

export default NewTodo
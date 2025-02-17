import React,{ useState,useEffect,} from 'react'

const UseEffect = () => {
  const [todo, settodo] = useState(null)
  useEffect(()=>{
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
        return res.json()
      }).then((data)=>{
        // console.log(data);
        
        settodo(data)
        console.log(data);
        
      })
     
    }, 3000);
  },[])
  return (
    <div>UseEffect</div>
  )
}

export default UseEffect
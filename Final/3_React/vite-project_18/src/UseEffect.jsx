import React,{useState,useEffect} from 'react'

const UseEffect = () => {
  const [Count, setCount] = useState(0);
  const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
    console.log("UseEffect");
  },[Count])
  
  return (
    <div>
      {console.log("Rendering")
      }
      Count:{Count}
    <br />
    <button onClick={()=>setCount(Count=>Count+1)}>+</button>
    <button onClick={()=>setisLoading(isLoading=>setisLoading(!isLoading)
    )}>Isloading</button>
    </div>
  )
}

export default UseEffect
import React,{useState,useEffect} from 'react'

const Search = ({searchHandelar}) => {
  const [Search, setSearch] = useState("");
 const handelec=(e)=>{
  setSearch(e.target.value)
  }
  useEffect(() => {
    searchHandelar(Search)
  }, [Search])
  
  return (
    <div style={{textAlign:'center'}}>
     <input type="text" placeholder='Search Here' value={Search} onChange={handelec}/>
    </div>
  )
}

export default Search
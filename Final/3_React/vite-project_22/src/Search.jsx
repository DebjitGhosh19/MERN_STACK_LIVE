import React from 'react'

const Search = () => {
  const [Search, setSearch] = useState();
 const handelec=()=>{
  setSearch()
  }
  return (
    <div style={{textAlign:'center'}}>
     <input type="text" name="" id="" placeholder='Search Here' value={Search} onChange={handelec()}/>
    </div>
  )
}

export default Search
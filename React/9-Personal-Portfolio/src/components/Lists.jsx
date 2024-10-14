const Lists=({listItem})=>{
 
  return <ul className="list-disc list-inside">
    {
      listItem.map((item)=>{
       return <li key={item}>{item}</li>
      })
    }
 
  </ul>
}
export default Lists;
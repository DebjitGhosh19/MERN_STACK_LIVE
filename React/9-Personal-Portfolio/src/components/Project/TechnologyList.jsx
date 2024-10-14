const TechnologyList=({arr})=>{
 
  return <ul className="flex ">
    {
      arr.map((item)=>{
       return <li className="bg-blue-200 m-1 p-1 rounded-md text-sm font-bold text-blue-600" key={item}>{item}</li>
      })
    }
 
  </ul>
}
export default TechnologyList;
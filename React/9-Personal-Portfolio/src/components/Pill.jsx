const Pill=({arr})=>{
 
  return <ul className="flex ">
    {
      arr.map((item)=>{
       return <li className="bg-gray-300 m-1 p-2 rounded-full text-sm font-bold text-slate-600" key={item}>{item}</li>
      })
    }
 
  </ul>
}
export default Pill;
const StudentList=()=>{
  const arr=["Debjit ","Sayana","Proloy","Srinjoy"]
return <>
  <ul className="p-5 list-disc">
    {
    arr.map(item=><li>{item}</li>)
    }
  </ul>
</>
}
export default StudentList;
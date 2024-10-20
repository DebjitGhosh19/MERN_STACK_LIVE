const List=({StudentList})=>{
  return <>
  <ol>  {StudentList.map((student)=><li key={student}>{student}</li>)}</ol>

  </>

}
 export default List;
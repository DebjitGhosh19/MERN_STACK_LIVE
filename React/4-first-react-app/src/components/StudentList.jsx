const StudentList=(proms)=>{
  
  return <ol>
    {
     proms.students.map((students)=><li key={students}>{students}</li>)
    }
  </ol>
}
export default StudentList;
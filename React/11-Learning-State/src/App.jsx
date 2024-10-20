
import { useState } from 'react';
import List from './Components/List'
function App() {
const [studentArr,setStudentArr]=useState(["Nirmal","Aman","Akash","Abjijit","Gopi"]);


const onChangeHandelar=(event)=>{
    if (event.key==="Enter") {
      // console.log(event.target.value);
      // studentArr.push(event.target.value);
      // console.log(studentArr);
     const newArr=[...studentArr,event.target.value];
     setStudentArr(newArr);
     event.target.value="";
    }
  }
  return(
    <>
    <h1>
      Learner of MERN Stack
    </h1>
    <List StudentList={studentArr}/>
    <input type="text"  placeholder="New student name" onKeyDown={onChangeHandelar}/>
    </>
  )
}

export default App

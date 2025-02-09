
import './App.css'

function App() {

const Parent=(event)=>{
  console.log("Parant",event);
  
}
const Child=(event)=>{
  console.log("Child",event);
  event.stopPropagation();
}
  return (
   <>
  <div className='Parent' onClick={Parent}>
    <button className='Child' onClick={Child}>Child</button>
  </div>
   </>
  )
}

export default App

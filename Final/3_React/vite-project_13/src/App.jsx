
import './App.css'
import ChildToParent from './ChildToParent'

function App() {
const handelData=(data)=>{
console.log(data);

}

  return (
   <>
   <h1>Hello</h1>
   <ChildToParent childData={handelData}/>

   
   </>
  )
}

export default App

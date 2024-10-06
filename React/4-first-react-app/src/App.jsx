
import './App.css'
import Heading from './components/Heading' 
import Paragraph from './components/Paragraph'
import  {Button, Success } from './components/Button'
import DynamicComponents from './components/DynamicComponents'
import StudentList from './components/StudentList'
import RandomNumber from './components/RandomNumber'
import Dynamic_2 from './components/Dynamic_2'
import Title from './components/Title'
import ThreeButtons from './components/ThreeButtons'
function App() {
  const studentsarr=["Debjit","Dipika","Dipti","Deep"];
  
  const ClickMeHandlar=()=>{
    console.log("ClickMeHandlar clicked");
   }
   const deleteMeHandlar=()=>{
    console.log("deleteMeHandlar clicked");
   }
   const SendMeHandelar=()=>{
    console.log("SendMeHandlar clicked");
   }
  return (
    <>

 <Heading/>
 <Paragraph/>
 <Button/>
 <Success/>
 <DynamicComponents/>
  <StudentList students={studentsarr}/>
  <RandomNumber/>
  <RandomNumber/>  <RandomNumber/>  <RandomNumber/>  <RandomNumber/>
  <Dynamic_2/>
  <Title TitleText='Hello'/>
  <Title TitleText='World'/>
  <Title TitleText='FG'/>
  <ThreeButtons btntext={"ok"} btntype={"green"} handlar={ClickMeHandlar} />
  <ThreeButtons btntext={"NO"} btntype={"NO"} handlar={deleteMeHandlar}/>
  <ThreeButtons btntext={"click"} handlar={SendMeHandelar} />
    </>
  )
}

export default App

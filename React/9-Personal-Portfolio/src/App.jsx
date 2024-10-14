

import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import ExtracurricularActivities from "./components/ExtracurricularActivities"
import Heading from "./components/Heading"
import Hobbies from "./components/Hobbies"
import Project from "./components/Project/Project"
import Skills from "./components/Skills"


function App() {
  

  return (
    
    <div className="bg-slate-100 px-4 py-8 ">
      <div className="bg-white max-w-3xl m-auto rounded-xl shadow-lg p-4">
     <Heading/> 
     <About/>
     <Project/>
     <Skills/>
     <Education/>
     <Hobbies/>
     <ExtracurricularActivities/>
     <Contact/>
     </div>
     </div>
     
  
  )
}

export default App

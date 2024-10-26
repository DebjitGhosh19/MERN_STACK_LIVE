import css from './App.module.css'
import Buttons from './Components/Buttons'
import Display from './Components/Display'

function App() {
  

  return (
    <>
    <div className={css.contener}>
    <Display/>
    <Buttons/>
    </div>
    
    </>
  )
}

export default App

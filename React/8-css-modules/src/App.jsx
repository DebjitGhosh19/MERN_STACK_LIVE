
import style from './App.module.css';
import Components from './components';


function App() {


  return (
    <>

     <Components>  <p className={style.heading}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, perferendis.</p>
     <button className={`${style.btn} ${style.bg}`}>Hello</button></Components>
  
     <Components> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque illo maiores ad nisi dolore blanditiis ducimus eius aliquid distinctio!</p></Components>


    </>
  )
}

export default App;

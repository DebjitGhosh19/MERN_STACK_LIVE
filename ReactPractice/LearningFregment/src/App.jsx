
import './App.css'
import Components from './Components/Components';
import ErrorHandle from './Components/ErrorHandle'
import Input from './Components/Input';
import Lists from './Components/Lists'


function App() {
  const foods = ["Dal", "Green Vegetable", "Roti", "Salad", "Milck", "Gea"];

  return (
    <>
    <Components>
    <h1>Healdey Foodes</h1>
    <Input/>
    <Lists foods={foods}/>
    <ErrorHandle foods={foods}></ErrorHandle>
    </Components>
    <Components>
    <h1>Hello Everyone</h1>
    </Components>
    </>
  )
}

export default App

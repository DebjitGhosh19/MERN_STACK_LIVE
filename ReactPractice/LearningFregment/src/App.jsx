
import { useState } from 'react';
import './App.css'
import Components from './Components/Components';
import ErrorHandle from './Components/ErrorHandle'
import FoodItems from './Components/FoodIems';
import Input from './Components/Input';



function App() {
  const foods = ["Dal", "Green Vegetable", "Roti", "Salad", "Milck", "Gea"];
  // let textShow='User Enter Food';
  let [textShow,setTextToShow]=useState('User Enter Food');
  const OnChangeHamdelar=(event)=>{
    console.log(event.target.value);
    setTextToShow(event.target.value);
  }
  return (
    <>
    <Components>
    <h1>Healdey Foodes</h1>
    <Input OnChangeHamdelar={OnChangeHamdelar} />
    <p>{textShow}</p>
    <FoodItems foods={foods}/>
    <ErrorHandle foods={foods}></ErrorHandle>
    </Components>
    <Components>
    <h1>Hello Everyone</h1>
    </Components>
    </>
  )
}

export default App

import { useState } from "react";
import "./App.css";
import Components from "./Components/Components";
import ErrorHandle from "./Components/ErrorHandle";
import FoodItems from "./Components/FoodIems";
import Input from "./Components/Input";

function App() {
  // const foods = ["Dal", "Green Vegetable", "Roti", "Salad", "Milck", "Gea"];
  // let textShow='User Enter Food';
  // let [textShow,setTextToShow]=useState('User Enter Food');
  let [foods, setFood] = useState([]);
  const OnChangeHandelar = (event) => {
    if (event.key == "Enter") {
      console.log(event.target.value);
      setFood([...foods, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <>
      <Components>
        <h1>Healdey Foodes</h1>
        <Input OnChangeHandelar={OnChangeHandelar} />

        <FoodItems foods={foods} />
        <ErrorHandle foods={foods}></ErrorHandle>
      </Components>
    </>
  );
}

export default App;

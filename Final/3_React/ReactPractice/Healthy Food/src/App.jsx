
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
function App() {
  const foodItem=["Dal","Green Vegetable","Roti","Salad","Milk"];
   
//  const foodItem=[];

  return (
    <>
    <h1>Healthy Food</h1>
    <ErrorMessage foodItem={foodItem}></ErrorMessage>
    <FoodItems foodItem={foodItem}></FoodItems>
    </>
  )
}

export default App

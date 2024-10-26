import "./App.css";
import AddItem from "./Components/AddItem";
import AppHeader from "./Components/AppHeader";

import TodoItems from "./Components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Bye Milck",
      dueDate: "10/10/2024",
    },
    {
      name: "Go To Collage",
      dueDate: "10/10/2024",
    },
    {
      name: "Go To Gym",
      dueDate: "Every Day",
    },
  ];

  return (
    <>
      <AppHeader />
      <AddItem />
      <TodoItems todoItems={todoItems}/>
     
    </>
  );
}

export default App;

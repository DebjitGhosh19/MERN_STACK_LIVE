import StudentList from "./components/StudentList";

function App() {
   
  const Todoitemlists=[{id:1,todotext:'Bye Milk',tododate:'04-sep-2024'},
    {id:2,todotext:'Go to collage',tododate:'Week Day'},
    {id:3,todotext:'Gym',tododate:'Every Day'}]

const mapArr=Todoitemlists.map((item)=>{
  return item.todotext;
})

console.log(mapArr);


  return (
    <>
      <p className="text-orange-400 font-bold">Learning Map</p>
      <StudentList/>
    </>
  )
}

export default App

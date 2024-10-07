import Item from './Item'

const TodoItems=()=>{
  const Todoitemlists=[{id:1,todotext:'Bye Milk',tododate:'04-sep-2024'},
    {id:2,todotext:'Go to collage',tododate:'Week Day'},
    {id:3,todotext:'Gym',tododate:'Every Day'}
]
  return <> {Todoitemlists.map((item)=>(<Item key={item.id} id={item.id}  Tododate={item.tododate} Todotext={item.tododate}/>))}
  </> 

}
export default TodoItems;
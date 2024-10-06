import Item from './Item'
const TodoItems=()=>{
  const Todoitemlists=[{id:1,todotext:'Bye Milk',tododate:'04-sep-2024'},
    {id:1,todotext:'Go to collage',tododate:'Week Day'},
    {id:1,todotext:'Gym',tododate:'Every Day'}
]
  return <> {Todoitemlists.map(item=><Item Tododate={item.tododate} Todotext={item.tododate}/>)}
  </> 

}
export default TodoItems;
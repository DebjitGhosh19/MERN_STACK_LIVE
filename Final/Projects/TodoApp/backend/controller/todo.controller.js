
import Todo from "../model/todo.model.js"
export const createTodo=async(req,res)=>{
  const newTodo=new Todo({
    text:req.body.text,
    completed:req.body.completed
  })
  await newTodo.save()
  .then(todo =>{
     res.send(todo)
    })
  .catch(err => console.error(err));
}
export const getTodo=async(req,res)=>{
try {
  const fetchTodo=await Todo.find()
  res.status(201).json({message:"Data fetch successfully",fetchTodo})
} catch (error) {
  console.log(error);
  res.status(401).json({message:"Error occure when try to fetch data"})
}
}
export const updateData=async (req,res) => {
  try {
   const todo= await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
   res.status(201).json({message:"Update data",todo})

   
   } catch (error) {
    res.status(401).json({message:"Error occure when try to update data"})
  }
  
}
export const deleteTodo=async(req,res)=>{
  try {
    const todo=await Todo.findByIdAndDelet(req.params.id);
    if (!todo) {
      return res.status(404).json({
        message:"Todo not found"
      })
    }
    res.status(201).json({message:"Data deleted successfully"})
  } catch (error) {
    res.status(401).json({message:"Error occure when try to delete data"})
  }
}
const express=require("express");
const PORT=3000;
const app=express();

app.get("/users",(req,res)=>{
  res.send("Hello")
})
app.use((req,res,next)=>{
  res.status(404).json({message:"Resource not found"})
})
app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
  
})
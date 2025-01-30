const express=require('express');
const app=express();
const port=3002;

app.get('/user/:id([0-9]+)',(req,res)=>{
  const id=req.params.id;
  res.send(`ID is ${id}`);
  
});

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});
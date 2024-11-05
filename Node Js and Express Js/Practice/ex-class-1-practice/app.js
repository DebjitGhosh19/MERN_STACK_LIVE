const express=require('express');
const app=express();
app.use('/',(req,res,next)=>{
  console.log("First middleware");
  next();
})
app.use('/test',(req,res,next)=>{
  console.log("second middleware");
  res.send(`<h1>Hello Test</h1>`)
})
app.listen(3000);
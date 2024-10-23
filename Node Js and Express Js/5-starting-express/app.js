// const http=require('http');
const RequestHandelar = require('./RequestHandelar');
// External Module
const express=require('express');
const app=express();
// const arr=[5,8,7,2,9];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element);
  
// }
// const server=http.createServer(app);

app.use("/",(req,res,next)=>{
  console.log('First middleware',req.method,req.url);
  next();
})
app.use("/test",(req,res,next)=>{
  console.log('Second middleware',req.method,req.url);
  res.send('<h1>Debjit Ghosh</h1>')
})
const port=3000;
app.listen(port,()=>{
  console.log(`server starting at: http//localhost:${port}`);
  
})

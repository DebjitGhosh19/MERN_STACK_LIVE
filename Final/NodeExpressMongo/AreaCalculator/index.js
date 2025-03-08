const express=require('express');
const app=express();
const PORT=3000;
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get("/",(req,res)=>{
  res.sendFile(__dirname+'/Views/index.html')
})
app.get("/triangle",(req,res)=>{
  res.sendFile(__dirname+'/Views/Triangle.html')
})
app.post("/triangle",(req,res)=>{
  const {Height,Weidth}=req.body;
  const area=1/2(Height*Weidth)
  res.send(`Triangle Area=${area}`)
})
app.get("/circle",(req,res)=>{
  res.sendFile(__dirname+'/Views/Circle.html')
})
app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);

})
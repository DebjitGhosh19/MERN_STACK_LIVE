const express=require('express');
const app=express();
const PORT=3000;
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
  res.sendFile(__dirname+'/Views/index.html')
})
app.get("/triangle",(req,res)=>{
  res.sendFile(__dirname+'/Views/Triangle.html')
})
app.post("/triangle",(req,res)=>{
  const Height=req.body.height;
  const Weidth=req.body.weidth;
  const area=(1/2)*(Height*Weidth);
  res.send(`Triangle Area=${area}`)
})
app.get("/circle",(req,res)=>{
  res.sendFile(__dirname+'/Views/Circle.html')
})
app.post("/circle",(req,res)=>{
  const r=req.body.Radious
  res.send(`Area of circle: ${Math.PI*(r*r)}`)
})
app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);

})
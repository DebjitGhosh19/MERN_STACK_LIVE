const express=require("express")
const app=express();

require('dotenv').config();
app.get("/products/:id([0-9]+)",(req,res)=>{
  res.send(`id=${req.params.id}`)
})
app.get("/products/:title([a-zA-Z]{3})",(req,res)=>{
  res.send(`Title=${req.params.title}`)
})
app.use("*",(req,res)=>{
  res.status(404).send({
    message:"not a valid route"
  })
})

app.listen(process.env.PORT,()=>{
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
})
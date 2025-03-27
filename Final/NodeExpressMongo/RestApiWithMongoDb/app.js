const express=require("express");
const app=express();

const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req,res,next)=>{
  res.sendFile(__dirname + '/views/index.html');
  next();
})
app.get((req,res,next)=>{
  res.status(404).json(
    {
      message:"Routes not found"
    }
  );
})
app.get((err,req,res,next)=>{
  res.status(500).json(
    {
      message:"Server Error"
    }
  );
})

module.exports = app;
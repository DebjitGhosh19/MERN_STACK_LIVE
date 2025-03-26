const express=require("express");
const app=express();

const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/",(req,res)=>{
  res.sendFile(__dirname + '/views/index.html');
})

module.exports = app;
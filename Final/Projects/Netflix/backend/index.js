const express=require("express");
require('dotenv').config()
const port=process.env.PORT
const app=express();
app.listen(port,(err)=>{
console.log(`Server is running at http://localhost:${port}`);
})
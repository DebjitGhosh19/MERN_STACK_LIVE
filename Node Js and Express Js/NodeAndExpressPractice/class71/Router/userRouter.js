const express=require('express');
const userRouer=express.Router();

userRouer.get('/',(req,res,next)=>{
  res.send(`
   <!DOCTYPE html>
<html lang="en">
<head>
  <title>Home Page</title>
</head>
<body>
  <h1>Welcome to airbnb</h1>
  <a href="/add-home">
    Add Home
  </a>
</body>
</html>`)
})
exports.userRouer=userRouer;
const express=require('express');
const hostRouter=express.Router();

hostRouter.get('/add-home',(req,res,next)=>{
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Add Home</title>
</head>
<body>
  <form action="/home-added" method="post">
  <h1>Register your home</h1>
  <input type="text" placeholder="Enter your home" name="HomeName">
  <input type="submit" >
</form>
</body>
</html>
  `)
})
hostRouter.post('/home-added',(req,res,next)=>{
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Add Home</title>
</head>
<body>
  <h1>Added your home successfully</h1>
  <a href="/">Go to home page</a>
</body>
</html>
  `)
})
exports.hostRouter=hostRouter;
const express=require('express');
const hostRouter=express.Router();

hostRouter.get('/add-home',(req,res,next)=>{
  res.send(`
    <h1>Register your home here</h1>
   <form action="/host/add-home" method="post">
    <input type="text" placeholder="Enetr your home name" name="HomeName">
    <input type="submit" >    
  </form>
    `);
})
hostRouter.post('/add-home',(req,res,next)=>{
  console.log(req.body);
  
  res.send(`
    <h1>Home add successfully</h1>
   <a href="/">Go to Home page</a>
    `);
});
module.exports=hostRouter;
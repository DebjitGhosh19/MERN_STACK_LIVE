const express=require('express');

const userRouter=express.Router();

const {registerHome}=require('./host')
userRouter.get('/',(req,res,next)=>{
  console.log(registerHome);
  
  // res.sendFile(path.join(rootUtils,"views","index.html"))
  res.render('index',{homes:registerHome,pagetitle:"airbnb"})

});
module.exports=userRouter;
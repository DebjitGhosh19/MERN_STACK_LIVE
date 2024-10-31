const express=require('express');
const path=require('path')
const userRouter=express.Router();
const rootUtils=require('../utils/utilsPath')
userRouter.get('/',(req,res,next)=>{
  res.sendFile(path.join(rootUtils,"views","index.html"))
});
module.exports=userRouter;
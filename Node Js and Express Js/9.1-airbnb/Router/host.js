const express=require('express');
const path=require('path')
const hostRouter=express.Router();
const rootUtils=require('../utils/utilsPath')
hostRouter.get('/add-home',(req,res,next)=>{
res.sendFile(path.join(rootUtils,"views","addHome.html"))
})
hostRouter.post('/add-home',(req,res,next)=>{
  console.log(req.body);
  
  res.sendFile(path.join(rootUtils,"views","homeAdded.html"));
})
module.exports=hostRouter;
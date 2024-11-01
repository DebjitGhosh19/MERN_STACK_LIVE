const express=require('express');

const hostRouter=express.Router();

hostRouter.get('/add-home',(req,res,next)=>{
res.render("addHome",{pagetitle:"Host add your home" })
})
const registerHome=[];
hostRouter.post('/add-home',(req,res,next)=>{
  registerHome.push(req.body);
  res.render("homeAdded",{pagetitle:" Home Hosted" })
})
exports.hostRouter=hostRouter;
exports.registerHome=registerHome;
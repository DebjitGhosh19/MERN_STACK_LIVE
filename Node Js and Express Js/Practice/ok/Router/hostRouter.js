const express=require('express');
const hostRouter=express.Router();
const path=require('path');
const rootPath=require('../util/util')
hostRouter.get('/add-home', (req, res,next) => {
res.sendFile(path.join(rootPath,"views","add-home.html"))
});
const registerHomes=[];
hostRouter.post('/add-home', (req, res,next) => {
  registerHomes.push(req.body)
  
  
  res.sendFile(path.join(rootPath,"views","homeAdded.html"));
});
exports.hostRouter=hostRouter;
exports.registerHomes=registerHomes;
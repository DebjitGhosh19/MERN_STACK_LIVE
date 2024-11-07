const express=require('express');
const hostRouter=express.Router();
hostRouter.get('/add-home', (req, res,next) => {
res.render("add-home",{pageTitle:"Add Home"});
});
const registerHomes=[];
hostRouter.post('/add-home', (req, res,next) => {
  registerHomes.push(req.body)
  res.render("homeAdded",{pageTitle:"Home Added "});
});
exports.hostRouter=hostRouter;
exports.registerHomes=registerHomes;
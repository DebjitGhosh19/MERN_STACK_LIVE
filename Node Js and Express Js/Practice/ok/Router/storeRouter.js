const express=require('express');
const storeRouter=express.Router();
const {registerHomes}=require('./hostRouter')
storeRouter.get('/', (req, res,next) => { 
  res.render("index",{homes:registerHomes,pageTitle:"airbnb"});
});
module.exports=storeRouter;

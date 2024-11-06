const express=require('express');
const storeRouter=express.Router();
const path=require('path');
const rootPath=require('../util/util')
const {registerHomes}=require('./hostRouter')
storeRouter.get('/', (req, res,next) => {
  console.log(registerHomes);
  
  res.sendFile(path.join(rootPath,"views","index.html"));
});
module.exports=storeRouter;

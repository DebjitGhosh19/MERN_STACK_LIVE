const express=require('express');
const storeRouter=express.Router();
const storeControllers=require('../controllers/storeControllers')
storeRouter.get('/', storeControllers.getHome);
module.exports=storeRouter;

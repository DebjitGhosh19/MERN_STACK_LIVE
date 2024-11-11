const express=require('express');

const userRouter=express.Router();


const storecontroller=require('../controller/storeConteroller')
userRouter.get('/',storecontroller.getHome);
module.exports=userRouter;
const express=require('express');

const hostRouter=express.Router();
const hostConteroler=require('../controller/hostConteroler')
hostRouter.get('/add-home',hostConteroler.getAddHome)

hostRouter.post('/add-home',hostConteroler.postAddHome)
exports.hostRouter=hostRouter;

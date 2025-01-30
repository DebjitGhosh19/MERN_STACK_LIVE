const express=require('express');
const router=express.Router();
const {getUsers, postUser}=require('../Controller/user.controller');

router.get('/',getUsers);
router.post('/',postUser);

module.exports=router;
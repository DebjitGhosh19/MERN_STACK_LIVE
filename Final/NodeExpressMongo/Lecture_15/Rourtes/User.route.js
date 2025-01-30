const express=require('express');
const { getUsers, SaveUser } = require('../controller/users.controllers');

const router=express.Router();

router.get('/',getUsers);
router.post('/',SaveUser);

module.exports=router;
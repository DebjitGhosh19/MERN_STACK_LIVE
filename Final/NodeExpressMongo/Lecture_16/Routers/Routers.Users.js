const express=require("express");
const { getUsers ,createController, updateUser,deleteUser} = require("../Controllers/users.controllers");

const route=express.Router();

route.get('/',getUsers);
route.post('/',createController);
route.put('/:id',updateUser);
route.delete('/:id',deleteUser);

module.exports=route;
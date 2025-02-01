const express=require("express");
const { getUsers } = require("../Controllers/users.controllers");

const route=express.Router();
route.get('/',getUsers);
// route.post('')
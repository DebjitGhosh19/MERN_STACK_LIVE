const express=require("express");

const { validationRun } = require("../validation/user.validation");
const {registerUser} = require("../controlers/user.controler");
const { authRules } = require("../validation/auth");
const userRouter=express.Router();
userRouter.post("/register",validationRun,authRules ,registerUser)

module.exports=userRouter
const express = require("express");
const userRouter = express.Router();
const storeController = require("../controllers/storeController");

userRouter.get("/", storeController.getIndex);
userRouter.get("/house", storeController.getHome);
userRouter.get("/house/:homeid", storeController.getHomeDetail);
module.exports = userRouter;

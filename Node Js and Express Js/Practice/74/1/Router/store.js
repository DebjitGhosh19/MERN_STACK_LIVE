const express = require("express");
const userRouter = express.Router();
const storeController = require("../controllers/storeController");

userRouter.get("/", storeController.getIndex);
userRouter.get("/homes", storeController.getHome);
userRouter.get("/homes/:homeId", storeController.getHomeDetails);
module.exports = userRouter;

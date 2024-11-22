const express = require("express");

const hostRouter = express.Router();
const hostController = require("../controllers/hostController");

hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home", hostController.getPostHome);
hostRouter.get("/host-homes", hostController.getHostHome);
hostRouter.get("/edit-home/:homeId", hostController.getEditHome);
hostRouter.post("/editHome", hostController.postEditHome);
exports.hostRouter = hostRouter;

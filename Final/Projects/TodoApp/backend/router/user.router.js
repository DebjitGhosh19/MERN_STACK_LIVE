import express from "express"
import { login, logout, register } from "../controller/user.conroller.js";
const router=express.Router();
router.post("/sigin",register)
router.post("/login",login);
router.get("/logout",logout)
export default router;
import express from "express"
import { createTodo, deleteTodo, getTodo, updateData } from "../controller/todo.controller.js";
const router=express.Router();
router.post("/create",createTodo)
router.get("/fetch",getTodo)
router.put("/update/:id",updateData)
router.delete("/delete/:id",deleteTodo)
export default router
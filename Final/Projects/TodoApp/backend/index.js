import express, { json } from "express"
import cors from "cors";  
import 'dotenv/config'
import mongoose from "mongoose";
import todoroute from "./router/todo.router.js"
import userRoute from "./router/user.router.js"
const app=express();
//Middlewares
app.use(cors({
    origin:process.env.Fontend_URL,
    credentials:true,
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}))
app.use(express.urlencoded({extended:true}));
app.use(express.json())
const Db_Url=process.env.MONGODB_URL;
try {
 await mongoose.connect(Db_Url)
      console.log("DB Connected");
        
} catch (error) {
  console.log(error);
  
}
app.use('/todo',todoroute)
app.use("/user",userRoute)
let PORT=process.env.port;
app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
})
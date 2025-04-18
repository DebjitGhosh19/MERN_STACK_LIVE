const express=require("express");

require('dotenv').config()
var cookieParser = require('cookie-parser');
const connectDB = require("./util/dbConnection");
const port=process.env.PORT
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
connectDB()
app.listen(port,(err)=>{
console.log(`Server is running at http://localhost:${port}`);

})
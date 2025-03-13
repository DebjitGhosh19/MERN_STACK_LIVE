const express=require("express");
const app=express();
const port=3000;
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/User1').then(()=>{
//   console.log("Db connected"); 
// }
// ).catch((err)=>{
//   console.log("Not Connect");
//   console.log(err);  
// })


const connectDb=async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/User1');
    console.log("Db is connect");
    
  } catch (error) {
    console.log(error);
    
  }
}

app.listen(port,async()=>{
  console.log(`Server is running at http://localhost:${port}`);
  await connectDb();
})
app.get("/",(req,res)=>{
  res.send("Welcome")
})
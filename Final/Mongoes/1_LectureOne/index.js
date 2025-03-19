const express=require("express");
const app=express();
const port=3000;
const mongoose = require('mongoose');
app.use(express.json());
// create product  schema
const productSchema=new mongoose.Schema({
  title:String,
  price:Number,
  decsription:String,
  createdAt:{
    type:Date,
    default:Date.now
  }
})
//create product model
const product=mongoose.model("products",productSchema);


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
app.post("/products",async(req,res)=>{
  try {
    const newProduct=new product({
      title:req.body.title,
      price:req.body.price,
      decsription:req.body.decsription,
    })
    await newProduct.save()
    res.send("ok")
  } catch (error) {
    console.log({message:error.message});
    
  }
})
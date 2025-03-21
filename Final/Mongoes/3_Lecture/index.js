const express=require("express")
const mongoose=require("mongoose");
var bodyParser= require('body-parser');

//monogodb connection
const connectDb=async ()=>{ 
try {
  await mongoose.connect("mongodb://localhost:27017/UserDbs");
  console.log("Connect");
  
} catch (error) {
  console.log(error);
}
}
//create mongodb schema 
const productSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  dec:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
})
//create mongodb model
const product=mongoose.model("producs",productSchema);

const app=express();
const port =3000;
app.listen(port,async()=>{
  console.log(`Server is running at http://localhost:${port}`);
  await connectDb()
})

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }))
app.get('/',(req,res)=>{
  res.send("Welcome")
})
//GET: /product-> return all the products
app.get('/product',async(req,res)=>{
  try {
    // const products= await product.find({$and:[{price:{$gt:400}},{title:{$eq:"ms"}}]}).countDocuments()
    const products= await product.find({$and:[{price:{$gt:400}},{title:{$eq:"ms"}}]}).sort({price:-1}).select({title:1})
   if (products) {
    res.status(200).send(products);
   } else {
    res.status(404).send("products not found");
   }
  } catch (error) {
    
    res.status(500).send({message:error.message});
  }
 
})



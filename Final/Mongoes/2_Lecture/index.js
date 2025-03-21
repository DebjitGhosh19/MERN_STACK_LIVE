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
    required:[true,"Title is required"],
    minlength:[3,"minimum length of the product title should be 3"],
    maxlength:[100,"maximum length of the product title should be 100"],
   trim:true,
   validate:{
    validator:function(v){
      return v.length==10 
    },
    message:(props)=>`${props.value} is not valid`
   
  },
  price:{
    type:Number,
    min:600,
    max:1000,
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
}})
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
    const products= await product.find();
   if (products) {
    res.status(200).send(products);
   } else {
    res.status(404).send("products not found");
   }
  } catch (error) {
    
    res.status(500).send({message:error.message});
  }
 
})
//GET : /product:id -> return one product using id
// app.get('/product/:id',async(req,res)=>{
//   try {
//     const id=req.params.id;
//     const productss=await product.findOne({_id:id});
//     if (product) {
//           res.status(200).send(productss);
//          } else {
//           res.status(404).send("products not found");
//          }
//         } catch (error) {
          
//           res.status(500).send({message:error.message});
//         }
// })
//Add data
app.post('/product',async(req,res)=>{
try {
  const newProducts=new product({
    title:req.body.title,
    price:req.body.price,
    dec:req.body.dec,
   })
 
   if (newProducts) {
    await newProducts.save();
    res.status(200).send(newProducts);
              
     } else {
              res.status(404).send("products not found");
             }
            }
   
catch (error) {
  res.status(500).send({message:error.message});
  
}
})

//Delete operation

app.delete("/product/:id",async(req,res)=>{
  try {
    const id=req.params.id;
const productDelete=await product.deleteOne({_id:id}) ;
if (productDelete) {
  res.send("Successfully deleted")
} else {
  res.send("Not deleted")
}
 
  } catch (error) {
   console.log(error);
    
  }
})

//Update operation


app.put("/product/:id",async(req,res)=>{
  try {
    const id=req.params.id;
const productUpdate=await product.updateOne({_id:id},{$set:{price:150}}) ;
if (productUpdate) {
  res.send("Successfully Update")
} else {
  res.send("Not update")
}
 
  } catch (error) {
   console.log(error);
    
  }
})
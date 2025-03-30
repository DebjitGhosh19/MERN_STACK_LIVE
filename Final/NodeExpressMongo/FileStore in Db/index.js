const express=require("express");
const app=express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const dbHost = process.env.DB_URL;


const multer  = require('multer')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// //Moongooes connect
const mongoose = require('mongoose');
const connectDb=async()=>{
try {
  await mongoose.connect(dbHost)
  console.log("Moongooes  connect");
  
} catch (error) {
  console.log("Moongooes not connect");
}
}
// //moongooes schema
const userSchema=new mongoose.Schema({
  name:String,
  file:String  
})
//moongooes model
const User=  mongoose.model("Users",userSchema)

//File upload code
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'my-uploads/')
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '_' + file.originalname
    cb(null, name)
  }
})

const upload = multer({ storage: storage })

app.get("/",(req,res)=>{

res.sendFile(__dirname+'/index.html')
})

app.post("/",upload.single('file'),async(req,res)=>{
try {
  const newUser=new User({
    name:req.body.name,
    file:req.file.filename
  })
  await newUser.save();
  res.send(newUser)
} catch (error) {
  console.log(error.message);
}
  })

app.listen(port,async()=>{
  console.log(`Server is running at http://localhost:${port} `);
 await connectDb();
})
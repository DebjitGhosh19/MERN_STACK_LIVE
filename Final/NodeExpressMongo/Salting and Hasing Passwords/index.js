const express=require("express");
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const app = express();
const port=process.env.PORT
const db_Url=process.env.DBURL;

//Salting+Hasing password
const bcrypt = require('bcrypt');
const saltRounds = 10;


 
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.listen(port,()=>{
  console.log(`Server is running at http://localhost:${port}`);
})

mongoose.connect(db_Url).then(()=>console.log("connectted db")
).catch((error)=>console.log('Db not connect')
)

const UserSchema=new mongoose.Schema({
  email:String,
  password:String
})
const Usermodel=mongoose.model("user",UserSchema)

app.get("/",(req,res)=>{
  res.sendFile(__dirname+'/views/index.html')
})
app.post("/register",async(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;
  bcrypt.hash(password, saltRounds, async function(err, hash) {
    // Store hash in your password DB.
    const newUser=new Usermodel({
      email,
      password:hash
    })
    await newUser.save();
res.send(newUser)
});


})
app.post("/signin",async(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;
try {
  const user=await Usermodel.findOne({email:email});
  if(user){
    bcrypt.compare(password,user.password, function(err, result) {
      // result == true
      if (result == true) {
        res.send("Valid user");
      }
  });
}
  else{
    res.send("Not valid user")
  }
} catch (error) {
 console.log(error);
 
}
})
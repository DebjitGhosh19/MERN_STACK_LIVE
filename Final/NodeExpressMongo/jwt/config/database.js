require('dotenv').config()
// console.log(process.env.db_url)
const mongoose=require("mongoose");
mongoose.connect(process.env.db_url)
.then(()=>{
  console.log("Db is connected"); 
})
.catch((error)=>{
  console.log(error.message);
  process.exit(1);
  
})
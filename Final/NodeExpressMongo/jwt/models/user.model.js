const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
  username:{
    type:String,
    require:true,
  }
  ,
  password: {
    type: String,
    required: true
  }
  ,
  createdAt:{
    type:Date,
    default:Date.now()
    }
})
const user=mongoose.model("user",userSchema);
module.exports=user;
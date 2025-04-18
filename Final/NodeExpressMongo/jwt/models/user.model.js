const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
  username:{
    type:String,
    require:true,
    unique:true,
  },
  password: {
    type: String,
    required: true
  },
  createdAt:{
    type:Date,
    default:Date.now()
  }
});
const User=mongoose.model("user",userSchema);
module.exports=User;
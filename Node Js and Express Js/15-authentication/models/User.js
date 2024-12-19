const mongoose=require('mongoose');

  const homeSchema= new mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    Email:{type:String,require:true,unique:true},
    Password:{type:String,require:true},
    userType:{type:String,require:true,enum:['guest','host']},
  
  })

   module.exports=mongoose.model('User',homeSchema);

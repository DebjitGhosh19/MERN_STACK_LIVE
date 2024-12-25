const mongoose=require('mongoose');
  const homeSchema= new mongoose.Schema({
    houseName:{type:String,require:true},
    rent:{type:Number,require:true},
    location:{type:String,require:true},
    rating:{type:Number,require:true},
    photoUrl:String,
    description:String,
     host:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',      
        }
  })
   module.exports=mongoose.model('Home',homeSchema);
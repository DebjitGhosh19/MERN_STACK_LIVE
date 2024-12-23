const mongoose=require('mongoose');

  const userSchema= new mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    userType:{type:String,require:true,enum:['guest','host']},
  favouriteHomes:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Home',      
    }
  ],
  otp:String,
  otpExpiry:Date,
  })

   module.exports=mongoose.model('User',userSchema);

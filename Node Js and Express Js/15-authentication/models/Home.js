const mongoose=require('mongoose');
const Favourites = require('./Favourites');
  const homeSchema= new mongoose.Schema({
    houseName:{type:String,require:true},
    rent:{type:Number,require:true},
    location:{type:String,require:true},
    rating:{type:Number,require:true},
    photoUrl:String,
    description:String
  })
  homeSchema.pre('findOneAndDelete',async function(next) {
    const homeId=this.getQuery()["_id"];
    await Favourites.deleteOne({homeId});
    next();
  })
   module.exports=mongoose.model('Home',homeSchema);
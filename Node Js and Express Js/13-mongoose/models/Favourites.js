const mongoose=require('mongoose');
  const FavouriteSchema=new mongoose.Schema({
 homeId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'Home',
  require:true,
  unique:true,
 }
  })
   module.exports=mongoose.model('Favourite',FavouriteSchema);
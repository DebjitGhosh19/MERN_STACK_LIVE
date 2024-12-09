const mongoose=require('mongoose');

// module.exports=class Home {
// constructor(houseName,rent,location,rating,photoUrl,description,_id) {
// this.houseName=houseName;
// this.rent=rent;
// this.location=location;
// this.rating=rating;
// this.photoUrl=photoUrl;
// this.description=description;
// if (_id) {
//   this._id=new ObjectId(String(_id))
// }
// }}
  const homeSchema=mongoose.Schema({
    houseName:{type:String,require:true},
    rent:{type:Number,require:true},
    location:{type:String,require:true},
    rating:{type:Number,require:true},
    photoUrl:String,
    description:String
  })
   module.exports=mongoose.model('Home',homeSchema);
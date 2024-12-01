const Favourite = require('./Favourites');
const {getDb}=require('../utils/Database-utils')

module.exports=class Home {
constructor(houseName,rent,location,rating,photoUrl,description) {
this.houseName=houseName;
this.rent=rent;
this.location=location;
this.rating=rating;
this.photoUrl=photoUrl;
this.description=description;
  }
  save(){
 const db=getdb();
 return db.collection("homes").insertOne(this).then((result)=>{
  console.log(result);
  
 })
  }
 static fetchAll(){

 
  }

  static findById(homeId){
 
  }

  static deleteById(homeId){
   
}
}

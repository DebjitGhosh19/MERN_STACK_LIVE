const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/Database-utils");


module.exports=class Favourite {
 constructor(homeId){
  this.homeId=homeId;
 }
 save(){
  const db = getDb();
    return db.collection("favourites").insertOne(this)
 
}
 static fetchAll(){
  const db = getDb();
  return db.collection("favourites").find().toArray();
 
 
  }
   static addToFevourites(homeId){

    
   }
   static deleteById(homeId){
    const db=getDb();
    return db
    .collection("favourites")
    .deleteOne({homeId});
}
  
}

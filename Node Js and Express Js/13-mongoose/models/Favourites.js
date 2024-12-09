const { ObjectId } = require("mongodb");

module.exports=class Favourite {
 constructor(homeId){
  this.homeId=homeId;
 }
 save(){
  const db = getDb();
  return db.collection("favourites").findOne({homeId: this.homeId}).then(existingFav=>{
    if (!existingFav) {
      console.log('Add to favourites');
      
      return db.collection("favourites").insertOne(this) 
    }
    console.log('Alreadey to favourites');
    return Promise.resolve();
  })
    
 
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

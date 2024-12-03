const { ObjectId } = require('mongodb');
const { getDb } = require('../utils/Database-utils');



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
    const db = getDb();
    return db.collection("homes").insertOne(this).then(result => {
      console.log(result);
    })
  }
 static fetchAll(){
  const db = getDb();
  return db.collection("homes").find().toArray();
 
  }

  static findById(homeId){
    const db = getDb();
    return db.collection("homes").find({_id: new ObjectId(String( homeId))}).next()
    .then(home=>{
      console.log(home);
      return home;
    })
    .catch(error=>{
      console.log("Error came while doing findById",error);
      
    })
  }

  static deleteById(homeId){
    
}
}

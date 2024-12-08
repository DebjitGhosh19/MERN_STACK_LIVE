const Favourite = require('./Favourites');
const airbnbDb=require('../utils/Database-utils') 

module.exports=class Home {
constructor(houseName,rent,location,rating,photoUrl,description) {
this.houseName=houseName;
this.rent=rent;
this.location=location;
this.rating=rating;
this.photoUrl=photoUrl;
this.description=description;
  }
  save() {
    if (this.id) {
        return airbnbDb.execute(
            `UPDATE homes 
             SET houseName = ?, rent = ?, location = ?, rating = ?, photoUrl = ?, description = ? 
             WHERE id = ?`, 
            [this.houseName, this.rent, this.location, this.rating, this.photoUrl, this.description, this.id]
        );
    }
    return airbnbDb.execute(
        'INSERT INTO homes (houseName, rent, location, rating, photoUrl, description) VALUES (?, ?, ?, ?, ?, ?)', 
        [this.houseName, this.rent, this.location, this.rating, this.photoUrl, this.description]
    );
}

 static fetchAll(){
  return airbnbDb.execute('SELECT * FROM homes');
 
  }

  static findById(homeId){
  return airbnbDb.execute('SELECT * FROM homes WHERE id=?',[homeId]);
  }

  static deleteById(homeId){
    return airbnbDb.execute('DELETE FROM homes WHERE id=?',[homeId]);
}
}

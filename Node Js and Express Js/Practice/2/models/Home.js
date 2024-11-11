const registerHome=[];
module.exports=class Home {
  constructor(houseName,rent,location,rating,photoUrl) {
    this.houseName=houseName;
    this.rent=rent;
    this.location=location;
    this.rating=rating;
    this.photoUrl=photoUrl;
  }
  save(){
    registerHome.push(this);
}
static fatchAll(){
  return registerHome;
}
}
// exports.registerHome=registerHome;
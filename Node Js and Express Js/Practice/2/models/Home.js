const path=require('path');
const fs=require('fs');
const rootDir=require('../utils/utilsPath')
const homeFilePath=path.join(rootDir,'Data','homes.json');

module.exports=class Home {
  constructor(houseName,rent,location,rating,photoUrl) {
    this.houseName=houseName;
    this.rent=rent;
    this.location=location;
    this.rating=rating;
    this.photoUrl=photoUrl;
  }
  save(){
    Home.fatchAll((registerHome)=>{
      registerHome.push(this);
      const homeFilePath=path.join(rootDir,'Data','homes.json');
      fs.writeFile(homeFilePath,JSON.stringify(registerHome),err => {
      // Checking for errors 
      if (err) throw err;

      // Success 
      console.log("Done writing");
  })
})
}
static fatchAll(callback){
  const homeFilePath=path.join(rootDir,'Data','homes.json');
fs.readFile(homeFilePath,(err,data)=>{
  if (!err) {
   callback(JSON.parse(data));
  }
else{
  callback([]);
}
})

}
}
// exports.registerHome=registerHome;
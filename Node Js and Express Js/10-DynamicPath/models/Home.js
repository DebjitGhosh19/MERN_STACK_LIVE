const path=require('path');
const fs=require('fs');
const rootDir=require('../utils/utilsPath');
const { error } = require('console');
const Favourite = require('./Favourites');
const homeFilePath=path.join(rootDir,'Data','home.json');

module.exports=class Home {
  constructor(houseName,rent,location,rating,photoUrl) {
this.houseName=houseName;
this.rent=rent;
this.location=location;
this.rating=rating;
this.photoUrl=photoUrl;
  }
  save(callback){
    Home.fetchAll((registerHome)=>{
      if (this.id) {//edit case
        registerHome=registerHome.map(home=>home.id!==this.id?home:this)
      }
      else{ //new case
        this.id=Math.random().toString();
        registerHome.push(this);
      }
      fs.writeFile(homeFilePath,JSON.stringify(registerHome),callback)
    })
   
  }
 static fetchAll(callback){
  fs.readFile(homeFilePath,(err,data)=>{
    if (err) {
     callback([]);
    }
   else{
    callback(JSON.parse(data))
   }
  })
 
  }

  static findById(homeId,callback){
    Home.fetchAll(homes=>{
      const home=homes.find(home=> home.id===homeId)
     callback(home)
    })
  }

  static deleteById(homeId,callback){
    Home.fetchAll(homes=>{
    const newHomes=homes.filter(home=>home.id!==homeId);
    fs.writeFile(homeFilePath,JSON.stringify(newHomes),error=>{
      if (error) {
        callback(error);
        return;
      }
      Favourite.deleteById(homeId,callback)
    })
  })
}
}

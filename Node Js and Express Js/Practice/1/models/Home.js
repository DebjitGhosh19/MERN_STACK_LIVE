const path=require('path');
const fs=require('fs');
const rootDir=require('../utils/utilsPath');
const { error } = require('console');
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
      registerHome.push(this);
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
}

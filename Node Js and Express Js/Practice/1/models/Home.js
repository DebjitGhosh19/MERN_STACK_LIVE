const path=require('path');
const fs=require('fs');
const rootDir=require('../utils/utilsPath');
const { error } = require('console');

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
    const homeFilePath=path.join(rootDir,'Data','home.json');
    fs.writeFile(homeFilePath,JSON.stringify(registerHome),(error)=>{
      if (error) {
        console.log(error);
        
      }
    })
  }
 static fetchAll(){
    return registerHome;
  }
}

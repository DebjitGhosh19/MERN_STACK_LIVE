const fs =require('fs');
const path=require('path');
const rootDir=require('../util/util');
const { error } = require('console');
const homeFilePath=path.join(rootDir,'data','homes.js');

const registerHomes=[];
module.exports=class Home{
  constructor(houseName,price,rating,location,photoUrl){
    this.houseName=houseName;
    this.price=price;
    this.rating=rating;
    this.location=location;
    this.photoUrl=photoUrl;
  }
  save(callback){
    Home.fetchAll(registerHomes=>{
      registerHomes.push(this);
 
      fs.writeFile(homeFilePath,JSON.stringify(registerHomes),callback)
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
exports.registerHomes=registerHomes;
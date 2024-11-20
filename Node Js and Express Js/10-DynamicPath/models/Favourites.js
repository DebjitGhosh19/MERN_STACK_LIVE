const path=require('path');
const fs=require('fs');
const rootDir=require('../utils/utilsPath');
const { error } = require('console');
const favourieFilePath=path.join(rootDir,'Data','favourite.json');

module.exports=class Favourite {
 
 
 static fetchAll(callback){
  fs.readFile(favourieFilePath,(err,data)=>{
    if (err) {
     callback([]);
    }
   else{
    callback(JSON.parse(data))
   }
  })
 
  }
   static addToFevourites(homeId,callback){

     Favourite.fetchAll((favouriteIds)=>{
       favouriteIds.push(homeId);
       fs.writeFile(favourieFilePath,JSON.stringify(favouriteIds),callback)
     })
    
   }
  
}

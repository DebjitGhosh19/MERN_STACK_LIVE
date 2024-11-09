const Home=require('../models/Home')
 exports.getHome=(req, res,next) => { 
  Home.fetchAll(registerHomes=>{
    res.render("index",{homes:registerHomes,pageTitle:"airbnb"});
  });
 
}
const Home = require("../models/Home");
exports.getHome=(req,res,next)=>{
  Home.fetchAll(registerHome =>{
    res.render('index',{homes:registerHome,pagetitle:"airbnb"})
  })

}
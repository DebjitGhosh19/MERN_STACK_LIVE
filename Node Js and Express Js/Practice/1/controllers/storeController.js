const Home = require("../models/Home");
exports.getHome=(req,res,next)=>{
  let registerHome=Home.fetchAll()

  res.render('index',{homes:registerHome,pagetitle:"airbnb"})
}
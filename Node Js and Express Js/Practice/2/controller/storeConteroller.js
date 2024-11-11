const Home=require('../models/Home');
exports.getHome=(req,res,next)=>{

 let registerHome= Home.fatchAll();
 
  res.render('index',{homes:registerHome,pagetitle:"airbnb"})

}
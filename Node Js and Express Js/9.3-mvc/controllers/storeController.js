const {registerHome}=require('../models/Home')

exports.getHome=(req,res,next)=>{
  console.log(registerHome);
  res.render('index',{homes:registerHome,pagetitle:"airbnb"});
}
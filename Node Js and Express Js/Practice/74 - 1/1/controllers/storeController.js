const Home = require("../models/Home");
exports.getIndex=(req,res,next)=>{
  Home.fetchAll(registerHome =>{
    res.render('store/index',{homes:registerHome,pagetitle:"airbnb"})
  })
}
exports.getHome=(req,res,next)=>{
  Home.fetchAll(registerHome =>{
    res.render('store/homes',{homes:registerHome,pagetitle:"airbnb"})
  })
}
exports.getHomeDetail=(req,res,next)=>{
const homeId=req.params.homeId;
Home.findById(homeId,home=>{
  console.log(homeId,home);
  res.render('store/homeDetail',{pagetitle:"airbnb"})
})
}
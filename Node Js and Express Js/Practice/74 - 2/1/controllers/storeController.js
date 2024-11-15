const Home = require("../models/Home");
exports.getIndex=(req,res,next)=>{
  Home.fetchAll(registerHome =>{
    res.render('store/index',{homes:registerHome,pagetitle:"airbnb"})
  })
}
exports.getHome=(req,res,next)=>{
  Home.fetchAll(registerHome =>{
    res.render('store/house',{homes:registerHome,pagetitle:"airbnb"})
  })
}
  exports.getHomeDetail=(req,res,next)=>{
   const homeId=req.params.homeid;
   Home.findById(homeId,home=>{
    console.log(homeId,home);
    res.render('store/houseDetail',{pagetitle:"airbnb"})
   })

    
}
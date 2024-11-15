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
exports.getHomeDetails=(req,res,next)=>{
  const homeId=req.params.homeId;
  Home.findById(homeId,home=>{
    if(!home){
      console.log("Homes not found");
     return res.redirect('/homes')
      
    }
    res.render('store/homeDetail',{home:home,pagetitle:"airbnb"})
  })
}

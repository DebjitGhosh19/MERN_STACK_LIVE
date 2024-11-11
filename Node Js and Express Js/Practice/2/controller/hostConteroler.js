const Home=require('../models/Home')
exports.getAddHome=(req,res,next)=>{
  res.render("addHome",{pagetitle:"Host add your home" })
  }
  exports.postAddHome=(req,res,next)=>{
    // registerHome.push(req.body);
    const {houseName,rent,location,rating,photoUrl}=req.body;
   const newHome = new Home(houseName,rent,location,rating,photoUrl);
   newHome.save();
    res.render("homeAdded",{pagetitle:" Home Hosted" })
  }

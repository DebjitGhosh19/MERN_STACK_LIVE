const Home=require('../models/Home')
exports.getAddHome=(req,res,next)=>{
  res.render("addHome",{pagetitle:"Host add your home" })
  }
 
  exports.postAddHome=(req,res,next)=>{
    const {houseName,price,location,rating,photoUrl}=req.body;
    const newHome=new Home(houseName,price,location,rating,photoUrl);
    newHome.save();
    res.render("homeAdded",{pagetitle:" Home Hosted" })
  }

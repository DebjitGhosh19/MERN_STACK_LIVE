const Home=require('../models/Home')
exports.getAddHome=(req,res,next)=>{
  res.render("addHome",{pagetitle:"Host add your home" })
  }
 
  exports.postAddHome=(req,res,next)=>{
    const houseName=req.body.houseName;
    const newHome=new Home(houseName);
    newHome.save();
    res.render("homeAdded",{pagetitle:" Home Hosted" })
  }

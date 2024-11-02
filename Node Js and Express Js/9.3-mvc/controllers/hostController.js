const {registerHome}=require('../models/Home')
exports.getAddHome=(req,res,next)=>{
  res.render("addHome",{pagetitle:"Host add your home" })
  }
 
  exports.postAddHome=(req,res,next)=>{
    registerHome.push(req.body);
    res.render("homeAdded",{pagetitle:" Home Hosted" })
  }

const Home=require('../models/Home')

exports.getAddHome=(req,res,next)=>{
  res.render("host/addHome",{pagetitle:"Host add your home" })
  }
  exports.getPostHome=(req,res,next)=>{
    // registerHome.push(req.body);
   const {houseName,rent,location,rating,photoUrl}=req.body;
   
   
   
   const newHome = new Home(houseName,rent,location,rating,photoUrl);
   
   newHome.save(err=>{
    if (err) {
     res.redirect('/');
      
    } else {
      res.render("host/homeAdded",{pagetitle:" Home Hosted" })
    }
    
   })
   
  }
 
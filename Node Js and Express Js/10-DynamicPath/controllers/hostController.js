const Home=require('../models/Home')

exports.getAddHome=(req,res,next)=>{
  res.render("host/editHome",{editing:false,pagetitle:"Host add your home" })
  }

  exports.getEditHome=(req,res,next)=>{
    const homeId=req.params.homeId;
    const editing=req.query.editing==='true';
if (!editing) {
  console.log("Editing flag not set properly");
  return res.redirect('/host/host-homes')
}
  Home.findById(homeId,home=>{
    if (!home) {
      console.log('Home not found for edinting');
      return res.redirect('/host/host-homes')
    }
    console.log(homeId,editing,home);
    res.render("host/editHome",{
      home:home,
      editing:editing,
      pagetitle:"Edit your home" })
  })

    
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

exports.postEditHome=(req,res,next)=>{
  const {id,houseName,rent,location,rating,photoUrl}=req.body;
  const newHome = new Home(houseName,rent,location,rating,photoUrl);
  newHome.id=id;
  newHome.save(err=>{
    if (err) {
    console.log("Error while updating home",err);      
    } else {
      res.redirect("host-homes")
    }
    
   })
}
exports.postDeleteHome=(req,res,next)=>{
  const homeId=req.params.homeId;
  console.log("came to delete",homeId);
  
  // res.redirect("/host/host-homes");
  Home.deleteById(homeId,error=>{
    if (error) {
      console.log("Error occure while deleteing home",error);      
    }
    res.redirect("/host/host-homes");
  
  }) 
}

 exports.getHostHome=(req,res,next)=>{
  Home.fetchAll(registerHome =>{
    res.render('host/host-homes',{homes:registerHome,pagetitle:"airbnb"})
  })
 }


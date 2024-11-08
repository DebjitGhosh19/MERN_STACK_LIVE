const Home=require('../models/Home')

exports.getAddHome= (req, res,next) => {
  res.render("add-home",{pageTitle:"Add Home"});
  }
  exports.postAddHome=(req, res,next) => {
    // const houseName=req.body.houseName;   
    // const price=req.body.price;
    // const rating=req.body.rating;
    //  const location=req.body.location; 
    //  const photoUrl=req.body.photoUrl; 
    const {houseName,price,rating,location,photoUrl}=req.body;
    const newHome = new Home(houseName,price,rating,location,photoUrl);
    newHome.save(error=>{
      if (error) {
        res.redirect('/')
      }
      else{
      res.render("homeAdded",{pageTitle:"Home Added "});
      }
    });
    
  }

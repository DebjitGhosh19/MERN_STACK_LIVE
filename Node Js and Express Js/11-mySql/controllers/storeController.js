const Home = require("../models/Home");
const Favourite =require("../models/Favourites");
exports.getIndex=(req,res,next)=>{
  Home.fetchAll().then(([registerHome]) =>{
    res.render('store/index',{homes:registerHome,pagetitle:"airbnb"})
  })

}
exports.getHome=(req,res,next)=>{
  Home.fetchAll().then(([registerHome]) =>{
    res.render('store/homes',{homes:registerHome,pagetitle:"airbnb"})
  })
}
exports.getFavourites=(req,res,next)=>{
  Favourite.fetchAll(favouriteIds =>{
  Home.fetchAll().then(([registerHome]) =>{
    const favouriteHomes=registerHome.filter(home=> favouriteIds.includes(home.id) )
    res.render('store/favourites',{homes:favouriteHomes,pagetitle:"Favourites"})
  })
})
}
exports.postFavourites=(req,res,next)=>{
// console.log('Call by favourite',req.body);
const homeId=req.body.id;
Favourite.addToFevourites(homeId,err=>{
  if (err) {
    console.log("Error:=",err);
    
  }
  res.redirect('/favourites',)
});

}
exports.postRemoveFavourite=(req,res,next)=>{
  const homeId=req.params.homeId;
 Favourite.deleteById(homeId,error=>{
  if (error) {
    console.log('Error while remove from favourites',error);    
  }
  res.redirect('/favourites')
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

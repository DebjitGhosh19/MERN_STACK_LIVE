const Home = require("../models/Home");
const User = require("../models/User");

exports.getIndex = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("store/index", {
      homes: registerHome,
      pagetitle: "airbnb",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};
exports.getHome = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("store/homes", {
      homes: registerHome,
      pagetitle: "airbnb",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};
exports.getFavourites = async (req, res, next) => {
  const userId=req.session.user._id;
  try {
   const user= await User.findById(userId).populate('favouriteHomes')
   res.render("store/favourites", {
    homes: user.favouriteHomes,
    pagetitle: "Favourites",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
  } catch (error) {
    console.log(error);
    res.redirect("/")
  }
};
exports.postFavourites = async (req, res, next) => {
  const homeId = req.body.id;
  const userId=req.session.user._id;
  try{
  const user=await User.findOne({_id:userId})
  if (!user.favouriteHomes.includes(homeId)) {
    user.favouriteHomes.push(homeId);
    await user.save();
  }}
  catch(err){
console.log(err);
  }
  finally{
    res.redirect('/favourites')
  }
};
exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({ homeId })
    .then(() => {
      res.redirect("/favourites");
    })
    .catch((error) => {
      console.log("Error while remove from favourites", error);
      res.redirect("/favourites");
    });
};
exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Homes not found");
      return res.redirect("/homes");
    }
    res.render("store/homeDetail", {
      home: home,
      pagetitle: "airbnb",
      isLoggedIn: req.session.isLoggedIn,user: req.session.user,
    });
  });
};

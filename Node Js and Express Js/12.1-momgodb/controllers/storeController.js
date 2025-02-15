const Home = require("../models/Home");
const Favourite = require("../models/Favourites");
exports.getIndex = (req, res, next) => {
  Home.fetchAll().then((registerHome) => {
    res.render("store/index", { homes: registerHome, pagetitle: "airbnb" });
  });
};
exports.getHome = (req, res, next) => {
  Home.fetchAll().then((registerHome) => {
    res.render("store/homes", { homes: registerHome, pagetitle: "airbnb" });
  });
};
exports.getFavourites = (req, res, next) => {
  Favourite.fetchAll().then(favouriteIds => {
    Home.fetchAll().then(registerHome => {
      favouriteIds=favouriteIds.map(favId=>favId.homeId);
      console.log(favouriteIds,registerHome);
      
      const favouriteHomes = registerHome.filter((home) =>
        favouriteIds.includes(home._id.toString())
      );
      res.render("store/favourites", {
        homes: favouriteHomes,
        pagetitle: "Favourites",
      });
    });
  });
};
exports.postFavourites = (req, res, next) => {
  // console.log('Call by favourite',req.body);
  const homeId = req.body.id;
  const fav=new Favourite(homeId);
  fav.save().then(()=>{
    res.redirect("/favourites");
  }).catch(err=>{
    console.log("Error while adding to favourites", err);
    res.redirect("/favourites");
  })
};
exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId).then(()=>{
    res.redirect("/favourites");
  }).catch((error)=>{
    console.log("Error while remove from favourites", error);
    res.redirect("/favourites");
  })
      
    }
exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Homes not found");
      return res.redirect("/homes");
    }
    res.render("store/homeDetail", { home: home, pagetitle: "airbnb" });
  });
};

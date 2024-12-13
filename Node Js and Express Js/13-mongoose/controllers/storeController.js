const Home = require("../models/Home");
const Favourite = require("../models/Favourites");
exports.getIndex = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("store/index", { homes: registerHome, pagetitle: "airbnb" });
  });
};
exports.getHome = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("store/homes", { homes: registerHome, pagetitle: "airbnb" });
  });
};
exports.getFavourites = (req, res, next) => {
  Favourite.find().populate("homeId").then((favIdHomes) => {
    const favouriteHomes = favIdHomes.map((favIdHome) =>
        favIdHome.homeId) ;
      res.render("store/favourites", {
        homes: favouriteHomes,
        pagetitle: "Favourites",
      });
    });
  }
exports.postFavourites = (req, res, next) => {
  const homeId = req.body.id;
  const fav = new Favourite({homeId});
  fav
    .save()
    .then(() => {
      res.redirect("/favourites");
    })
    .catch((err) => {
      console.log("Error while adding to favourites", err);
      res.redirect("/favourites");
    });
};
exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({homeId})
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
    res.render("store/homeDetail", { home: home, pagetitle: "airbnb" });
  });
};

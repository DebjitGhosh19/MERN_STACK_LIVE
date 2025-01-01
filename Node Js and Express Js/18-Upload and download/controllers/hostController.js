const Home = require("../models/Home");

exports.getAddHome = (req, res, next) => {
  res.render("host/editHome", {
    editing: false,
    pagetitle: "Host add your home",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  if (!editing) {
    console.log("Editing flag not set properly");
    return res.redirect("/host/host-homes");
  }
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found for edinting");
      return res.redirect("/host/host-homes");
    }
    console.log(homeId, editing, home);
    res.render("host/editHome", {
      home: home,
      editing: editing,
      pagetitle: "Edit your home",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};
// exports.getPostHome = (req, res, next) => {
//   const { houseName, rent, location, rating, photoUrl, description } = req.body;
//   const newHome = new Home({
//     houseName,
//     rent,
//     location,
//     rating,
//     photoUrl,
//     description,
//   });
//   newHome.save().then(() => {
//     res.render("host/host-homes", { pagetitle: " Home Hosted" });
//   });
// };
exports.getPostHome = (req, res, next) => {
  const { houseName, rent, location, rating, photoUrl, description } = req.body;
  const newHome = new Home({
    houseName,
    rent,
    location,
    rating,
    photoUrl,
    description,
    host:req.session.user._id,
  });
  console.log(req.body);
  
  newHome.save().then(() => {
      res.render("/host/host-homes")
    });
 
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, rent, location, rating, photoUrl, description } =
    req.body;
  Home.findById(id)
    .then((existingHome) => {
      if (!existingHome) {
        console.log("Home not found for editing");

        return res.redirect("/host/host-homes");
      }
      existingHome.houseName = houseName;
      existingHome.rent = rent;
      existingHome.location = location;
      existingHome.rating = rating;
      existingHome.photoUrl = photoUrl;
      existingHome.description = description;
      return existingHome.save();
    })
    .finally(() => {
      return res.redirect("/host/host-homes");
    });
};
exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("came to delete", homeId);

  // res.redirect("/host/host-homes");
  Home.findByIdAndDelete(homeId).then(() => {
    res.redirect("/host/host-homes");
  });
};

exports.getHostHome = (req, res, next) => {
  Home.find({host:req.session.user._id}).then((registerHome) => {
    res.render("host/host-homes", {
      homes: registerHome,
      pagetitle: "airbnb",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};

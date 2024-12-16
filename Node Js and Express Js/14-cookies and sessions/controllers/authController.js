exports.getLogin = (req, res, next) => {
  res.render("auth/login", { pagetitle: "Login", isLoggedIn: false });
};
exports.postLogin = (req, res, next) => {
  console.log(req.session.isLoggedIn, req.body);
  req.session.isLoggedIn = true;
  res.redirect("/");
};
exports.postLogout = (req, res, next) => {
  console.log(req.session.isLoggedIn, req.body);
  res.cookie("isLoggedIn", false);
  res.redirect("/login");
};

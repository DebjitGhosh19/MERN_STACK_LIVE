exports.getLogin = (req, res, next) => {
  res.render("auth/login", { pagetitle: "Login", isLoggedIn: false });
};
exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};
exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
};
exports.getsignup = (req, res, next) => {
  res.render("auth/signup", { pagetitle: "signup", isLoggedIn: false });
};
exports.postsignup= (req, res, next) => {
  console.log('Signup',req.body);
  
  res.redirect("/login");
};
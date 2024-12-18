const {check, validationResult}=require('express-validator');

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
let firstNameValidator=

exports.postsignup= [
  //First Name validatiom
  check('firstName')
.notEmpty()
.withMessage('First name is required')
.trim()
.isLength({min:2})
.withMessage("First name must be at last 2 characters long")
.matches(/^[a-zA-Z\s]+$/)
.withMessage('First name can only contain letters'),

 //Last Name validatiom
 check('lastName')
 .notEmpty()
 .withMessage('Last name is required')
 .trim()
 .isLength({min:2})
 .withMessage("Last  name must be at last 2 characters long")
 .matches(/^[a-zA-Z\s]*$/)
 .withMessage('Last  name can only contain letters'),
  (req, res, next) => {
    console.log('Signup',req.body);
    const errors=validationResult(req);
if(!errors.isEmpty()){
  return res.status(422).render("auth/signup", { 
     pagetitle: "signup",
     isLoggedIn: false,
     errorMessages:errors.array().map(err=>err.msg),
    });
}
  res.redirect("/login");
  },
]
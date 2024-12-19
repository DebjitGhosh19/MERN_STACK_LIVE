const {check, validationResult}=require('express-validator');
const User = require('../models/User');

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
 //Email validation
 check('Email')
 .isEmail()
 .withMessage('Invalid email address')
 .normalizeEmail(),

 //Password validation
 check('Password')
 .notEmpty()
 .withMessage('Password is required')
 .isLength({min:8})
 .withMessage('Password must be at least 8 characters long')
 .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
 .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
 .trim(),
 //confirm password validation
 check('confirm_password')
 .notEmpty()
 .withMessage('Confirm password is required')
 .custom((value, {req}) => value === req.body.Password)
 .withMessage('Passwords do not match'),
 //user type validation
 check('userType')
 .notEmpty()
 .withMessage('User type is required')
 .isIn(['host', 'guest'])
 .withMessage('Invalid user type'),
//  termsAndCondition 
 check('terms')
 .custom((value, {req}) => value === 'on')
 .withMessage('You must agree to the terms and conditions'),


  (req, res, next) => {
    console.log('Signup',req.body);
    const errors=validationResult(req);
if(!errors.isEmpty()){
  return res.status(422).render("auth/signup", { 
     pagetitle: "signup",
     isLoggedIn: false,
     errorMessages:errors.array().map(err=>err.msg),
     oldInput:req.body,
    });
}
  const {firstName,
  lastName,
  Email,
  Password,
  userType}=req.body;
  const user=new User({
    firstName,lastName,Email,Password,userType
  });
  user.save().then(result=>{
    console.log(result);
    res.redirect("/login");
  }).catch(error=>{
    return res.status(422).render("auth/signup", { 
      pagetitle: "signup",
      isLoggedIn: false,
      errorMessages:[error],
      oldInput:req.body,
     });
  })
 

  },
]
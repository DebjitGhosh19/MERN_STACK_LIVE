const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const sendGrid=require("@sendgrid/mail");
const SEND_GRID_KEY="";
sendGrid.setApiKey(SEND_GRID_KEY);
exports.getLogin = (req, res, next) => {
  res.render("auth/login", { pagetitle: "Login", isLoggedIn: false });
};
exports.getsignup = (req, res, next) => {
  res.render("auth/signup", { pagetitle: "signup", isLoggedIn: false });
};
exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
try{
  const user=await User.findOne({email});
  if (!user) {
    throw new Error ('User not found');
  }
  const isMatch= await bcrypt.compare(password,user.password);
  if(!isMatch){
    throw new Error('password  invalid');
  }
 req.session.isLoggedIn=true;
 req.session.user=user;
 await req.session.save();
 res.redirect("/");
}
catch(err){
      res.render("auth/login", {
        pagetitle: "Login",
        isLoggedIn: false,
        errorMessages: [err.message],
      });
    };
};
exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
};

exports.postsignup = [
  //First Name validatiom
  check("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name must be at last 2 characters long")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("First name can only contain letters"),

  //Last Name validatiom
  check("lastName")
    .trim()
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage("Last  name can only contain letters")
,
  //email validation
  check("email")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),

  //password validation
  check("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long")
    .matches(/[a-z]/)
    .withMessage("Password should have atleast one small alphabet")
    .matches(/[A-Z]/)
    .withMessage('Password should have atleast one capital alphabet')
    .matches(/[!@#$%^&*_":?]/)
    .withMessage(
      "Password should have atleast  one special character"
    )
    ,
  //confirm password validation
  check("confirm_password")
    .trim()
    .custom((value, { req }) =>{
      if(value !== req.body.password){
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
  //user type validation
  check("userType")
    .trim()
    .notEmpty()
    .withMessage("User type is required")
    .isIn(["guest","host"])
    .withMessage("User type is invalid"),
  //  termsAndCondition
  check("terms")
    .notEmpty()
    .withMessage("Terms and condition must be accepted"),

  async(req, res, next) => {
    console.log("User came for Signup", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pagetitle: "signup",
        isLoggedIn: false,
        errorMessages: errors.array().map((err) => err.msg),
        oldInput: req.body,
      });
    }
    const { firstName, lastName, email, password, userType } = req.body;
    try {
      const hashedPassword=await bcrypt.hash(password,12);
      const user = new User({
        firstName,lastName,email,
        password: hashedPassword,
        userType,
      });
      await user.save();
     return res.redirect("/login");
    } catch (error) {
      return res.status(422).render("auth/signup", {
        pagetitle: "signup",
        isLoggedIn: false,
        errorMessages:[error.msg],
        oldInput: req.body,
      });
    }
   
  }
];

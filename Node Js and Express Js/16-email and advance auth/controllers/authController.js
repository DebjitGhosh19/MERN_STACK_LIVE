const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const sendGrid=require('@sendgrid/mail');
// SECURITY WARNING: Never commit API keys to source control
// Store this in environment variables instead
const SEND_GRID_KEY="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"
sendGrid.setApiKey(SEND_GRID_KEY) 

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

   async (req, res, next) => {
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
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('Email already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        userType,
      });
      await user.save();
      
      const welcomeEmail = {
        to: email,
        from: 'babaighosh24.08.2002@gmail.com', // This email needs to be verified with SendGrid
        subject: 'Welcome to Airbnb !!!',
        html: `<h1>welcome ${firstName} ${lastName} Please book your vacation home with us.</h1>`
      };
      
      try {
        await sendGrid.send(welcomeEmail);
        console.log('Welcome email sent successfully');
      } catch (emailError) {
        console.error('Error sending welcome email:', emailError.response?.body || emailError);
        // Continue with signup even if email fails
      }

      return res.redirect("/login");
    } catch (error) {
      console.error('Signup error:', error);
      return res.status(422).render("/auth/signup", {
        pagetitle: "signup",
        isLoggedIn: false,
        errorMessages: [error.message],
        oldInput: req.body,
      });
    }
  },
];
exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
};
exports.getForgotPassword=(req,res,next)=>{
  res.render("auth/forgot-password", { pagetitle: "Forgot Password", isLoggedIn: false });
}
exports.getResetPassword=(req,res,next)=>{
  const {email}=req.query;
  res.render("auth/reset-password", { pagetitle: "Reset Password", isLoggedIn: false,email:email, });
}
exports.postResetPassword=[//password validation
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
    async(req,res,next)=>{
      const {email,otp,password,confirm_password}=req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render("auth/reset-password", {
          pagetitle: "Reset Password",
          isLoggedIn: false,
          errorMessages: errors.array().map(err=>err.msg),
          email:email,
        });
      }
      try {
        const user= await User.findOne({email});
        if (!user) {
          throw new Error('User not found')
        }
        else if(user.otpExpiry<Date.now()){
          throw new Error("OTP Expired");
          
        }
        else if(user.otp!==otp){
          throw new Error("OTP Invalid");
          
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        user.password=hashedPassword;
        user.otp=undefined;
        user.otpExpiry=undefined;
        await user.save();
        return res.redirect("/login");
      } catch(err){
        res.render("auth/reset-password", {
          pagetitle: "Reset Password",
          isLoggedIn: false,
          errorMessages: [err.message],
          email:email,
        });
        
      }
    }
   ]

exports.postForgotPassword=async(req,res,next)=>{
  const {email}=req.body;
  console.log(email);
  try{
    const user = await User.findOne({email});
    if (!user) {
      throw new Error('User not found');
    }
    const otp=Math.floor(100000+Math.random()*900000).toString();
    user.otp=otp;
    user.otpExpiry=Date.now()+5*60*1000
    await user.save();
    const forgetEmail = {
      to: email,
      from: 'babaighosh24.08.2002@gmail.com', 
      subject: 'Your Otp for reset password',
      html: `<h1>OTP is ${otp}</h1>
      <p> Enter this OTP on <a href="http://localhost:3000/reset-password?email=${email}">Reset Password</a>Page</p>
      `
    };
    await sendGrid.send(forgetEmail);
    res.redirect(`/reset-password?email=${email}`)
  
  }catch(err){
    res.render("auth/forgot-password", {
      pagetitle: "Forgot Password",
      isLoggedIn: false,
      errorMessages: [err.message],
    });
  }
}
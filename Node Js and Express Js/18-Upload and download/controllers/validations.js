const { check } = require("express-validator");

 
 
 //First Name validation
 exports.firstNameValidation= check("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name must be at last 2 characters long")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("First name can only contain letters");

  //Last Name validation
  exports.lastNameValidation= check("lastName")
    .trim()
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage("Last name can only contain letters");

  //email validation
  exports.emailValidation=check("email")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail()
    .custom(async (email) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('Email already exists');
      }
      return true;
    });

  //password validation
  exports.passwordValidation=check("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/[a-z]/)
    .withMessage("Password should have at least one small alphabet")
    .matches(/[A-Z]/)
    .withMessage('Password should have at least one capital alphabet')
    .matches(/[!@#$%^&*_":?]/)
    .withMessage("Password should have at least one special character");

  //confirm password validation
  exports.confirmPasswordValidation=check("confirm_password")
    .trim()
    .custom((value, { req }) => {
      if(value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    });
  //user type validation
  exports.userTypeValidation=check("userType")
    .trim()
    .notEmpty()
    .withMessage("User type is required")
    .isIn(["guest","host"])
    .withMessage("User type is invalid");

  //termsAndCondition
  exports.termsValidation=check("terms")
    .notEmpty()
    .withMessage("Terms and condition must be accepted");

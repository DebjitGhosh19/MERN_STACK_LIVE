import { check} from "express-validator";

export const validationRun = [
  check('name')
    .trim()
    .isString().withMessage('Name must be a string')
    .isLength({ min: 3, max: 50 }).withMessage('Name must be between 3 and 50 characters')
    .matches(/^[a-zA-Z ]+$/).withMessage('Name must contain only letters and spaces'),

  check('email')
    .isEmail().withMessage('Email must be a valid email address')
    .normalizeEmail(),

  check('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
    .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
    .matches(/[0-9]/).withMessage('Password must contain at least one number')
    .matches(/[@$!%*?&#]/).withMessage('Password must contain at least one special character'),

  check('dob')
    .isDate({ format: 'YYYY-MM-DD' }).withMessage('Date of Birth must be a valid date in YYYY-MM-DD format')
    .custom((value) => {
      const today = new Date();
      const dob = new Date(value);
      if (dob >= today) {
        throw new Error('Date of Birth must be in the past');
      }
      return true;
    })

  
]
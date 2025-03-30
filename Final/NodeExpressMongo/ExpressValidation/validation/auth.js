const { validationResult } = require("express-validator");

exports.authRules=(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let listmessage=errors.array().map((error)=>error.msg
    )
    return res.status(400).json({ errors: listmessage });
  }
  next();
}
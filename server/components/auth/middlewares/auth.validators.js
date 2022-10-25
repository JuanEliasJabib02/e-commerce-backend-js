const { body } = require("express-validator");
const { validateResults } = require("../../../utils/handleValidators");


const signUpvalidator = [

  body("firstName").notEmpty()
    .withMessage("firstName cant be empty"),
  body("lastName").notEmpty()
    .withMessage("firstName cant be empty"),
  body("email").notEmpty().isEmail()
    .withMessage("email cant be empty"),
  body("password").notEmpty().withMessage("password cant be empty")
    .isAlphanumeric()
    .withMessage("password must contain letters and numbers"),
  // Validate result
  (req, res, next) => {
    return validateResults(req,res,next)
  }
]





module.exports = { signUpvalidator };
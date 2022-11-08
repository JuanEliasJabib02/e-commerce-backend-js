const { body } = require("express-validator");
const { validateResults } = require("../../../utils/handleValidators");


const nameCategoryValidator = [

  body("name").notEmpty()
    .withMessage("name cant be empty"),
  // Validate result
  (req, res, next) => {
    return validateResults(req,res,next)
  }
]




module.exports = {nameCategoryValidator};
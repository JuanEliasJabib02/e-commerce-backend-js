const express = require("express");

const { addCategory } = require("./categories.controller");

//Controllers

//Middlewares
const { checkToken } = require("../../middlewares/checkToken");
const { onlyAdmin } = require("../../middlewares/onlyAdmin");
const { addCategoryValidator } = require("./middlewares/category.validators");

const categoryRouter = express.Router();


//Endpoints

//getCategories
categoryRouter.post("/add-category",
  checkToken,
  onlyAdmin,
  addCategoryValidator,
  addCategory
);
// Update categorie ( OnlyAdmin )
// Delete categorie ( OnlyAdmin)





module.exports = { categoryRouter };
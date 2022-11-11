const express = require("express");

const { addCategory, getCategories, updateCategoryName, deleteCategory } = require("./categories.controller");

//Controllers

//Middlewares
const { checkToken } = require("../../middlewares/checkToken");
const { onlyAdmin } = require("../../middlewares/onlyAdmin");
const { nameCategoryValidator } = require("./middlewares/category.validators");
const { findCategory } = require("./middlewares/findCategory");

const categoryRouter = express.Router();


//Endpoints

//getCategories

/**
 * @openapi
 * /categories:
 *    get:
 *        tags:
 *            - categories
 *        summary: "get categories"
 * 
 */

categoryRouter.get("/", getCategories);

categoryRouter.post("/",
  checkToken,
  onlyAdmin,
  nameCategoryValidator,
  addCategory
);
// Update categorie ( OnlyAdmin )

categoryRouter.put("/:id",
  checkToken,
  onlyAdmin,
  nameCategoryValidator,
  findCategory,
  updateCategoryName
);
// Delete categorie ( OnlyAdmin)

categoryRouter.delete("/:id",
  checkToken,
  onlyAdmin,
  findCategory,
  deleteCategory
)





module.exports = { categoryRouter };
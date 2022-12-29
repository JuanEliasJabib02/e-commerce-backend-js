const express = require("express")
const { createCategory, getAllCategories } = require("./category.controller")
const { validateCategory } = require("./middlewares/category.validator")
const { checkToken } = require("../../middlewares/checkToken")
const { onlyAdmin } = require("../../middlewares/onlyAdmin")

//Controllers


//Middlewares

const categoryRouter = express.Router()


//Endpoints

// Create cateogry (ONLYADMIN)

categoryRouter.post("/",
  checkToken,
  onlyAdmin,
  validateCategory,
  createCategory
)

//Get categories

categoryRouter.get("/", getAllCategories)
// Get categories by id

// Update categories (ONLYADMIN)

// Delete category (ONLYADMIN)

module.exports = {categoryRouter}
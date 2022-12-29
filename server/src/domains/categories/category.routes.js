const express = require("express")
const { createCategory, getAllCategories, updateCategory } = require("./category.controller")
const { validateCategory } = require("./middlewares/category.validator")
const { checkToken } = require("../../middlewares/checkToken")
const { onlyAdmin } = require("../../middlewares/onlyAdmin")
const { getCategoryById } = require("./category.controller")

//Controllers


//Middlewares

const categoryRouter = express.Router()


//Endpoints
categoryRouter.post("/",
  checkToken,
  onlyAdmin,
  validateCategory,
  createCategory
)

categoryRouter.get("/", getAllCategories)

categoryRouter.get("/:id", getCategoryById)

// Update categories (ONLYADMIN)

categoryRouter.patch("/:id",
  checkToken,
  onlyAdmin,
  validateCategory,
  updateCategory
)
// Delete category (ONLYADMIN)

module.exports = {categoryRouter}
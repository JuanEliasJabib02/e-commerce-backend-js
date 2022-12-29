const express = require("express")
const { createCategory } = require("./category.controller")
const { validateCategory } = require("./middlewares/category.validator")
const { checkToken } = require("../../middlewares/checkToken")


//Controllers


//Middlewares

const categoryRouter = express.Router()


//Endpoints

// Create cateogry (ONLYADMIN)

categoryRouter.post("/",
  checkToken,
  validateCategory,
  createCategory
)

//Get categories

// Get categories by id

// Update categories (ONLYADMIN)

// Delete category (ONLYADMIN)

module.exports = {categoryRouter}
const express = require("express")
const { createProduct } = require("./product.controller")

// Controllers

// Middlewares
const { checkToken } = require("../../middlewares/checkToken")
const { onlyAdmin } = require("../../middlewares/onlyAdmin")
const { uploadFile } =require("../../utils/handleStorage")



const productRouter = express.Router()


//Endpoints


// createProduct(ONLYADMIN)

productRouter.post("/",
  checkToken,
  onlyAdmin,
  createProduct
)


//get all products

//Get product by Id

// Update product


// delete product

module.exports = { productRouter }

const express = require("express");
const { checkToken } = require("../../middlewares/checkToken");
const { onlyAdmin } = require("../../middlewares/onlyAdmin");
const { addProduct } = require("./products.controller");

//Controllers

//Middlewares


const productsRouter = express.Router();


// Endpoints


//add product (ONLY ADMIN)
productsRouter.post("/add-product", checkToken, onlyAdmin, addProduct);

//add productColorSize(ONLY ADMIN)

//add productColor(ONLY ADMIN)

//add productSize (Only ADMIN)
 



module.exports = { productsRouter };
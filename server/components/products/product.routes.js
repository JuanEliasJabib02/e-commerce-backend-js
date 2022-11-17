const express = require('express');

//Controllers
const { addProduct } = require('./products.controller');

//Middlewares
const { addProductValidator } = require('./middlewares/products.validators');
const { checkToken } = require('../../middlewares/checkToken');
const { onlyAdmin } = require('../../middlewares/onlyAdmin');

//Router
const productsRouter = express.Router();

// Endpoints
productsRouter.post(
	'/add-product',
	checkToken,
	onlyAdmin,
	addProductValidator,
	addProduct
);

//add productColorSize(ONLY ADMIN)

//add productColor(ONLY ADMIN)

//add productSize (Only ADMIN)

module.exports = { productsRouter };

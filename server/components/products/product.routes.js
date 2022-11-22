const express = require('express');

//Controllers
const {
	addProduct,
	getProducts,
	getProductById,
} = require('./products.controller');

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

//add productColorSize(ONLY ADMIN) //productImgs

//add productColor(ONLY ADMIN)

//add productSize (Only ADMIN)

productsRouter.get('/', getProducts);

productsRouter.get('/:id', getProductById);

//Update product

//delete product

module.exports = { productsRouter };

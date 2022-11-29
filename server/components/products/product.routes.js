const express = require('express');

//Controllers
const {
	addProduct,
	getProducts,
	getProductById,
	addProductSize,
	addProductColorSize,
	addProductColor,
} = require('./products.controller');

//Middlewares
const { addProductValidator } = require('./middlewares/products.validators');
const { checkToken } = require('../../middlewares/checkToken');
const { onlyAdmin } = require('../../middlewares/onlyAdmin');
const { ProductSize } = require('./models/productSize.model');

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

productsRouter.post('/add-product-size', checkToken, onlyAdmin, addProductSize);

productsRouter.post(
	'/add-product-color',
	checkToken,
	onlyAdmin,
	addProductColor
);

//add productColorSize(ONLY ADMIN) //productImgs

productsRouter.post('/add-product-color-size', addProductColorSize);

//add productColor(ONLY ADMIN)

productsRouter.get('/', getProducts);

productsRouter.get('/:id', getProductById);

//Update product

//delete product

module.exports = { productsRouter };

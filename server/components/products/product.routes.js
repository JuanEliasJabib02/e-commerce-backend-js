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
const { uploadFile } = require('../../utils/handleStorage');

//Router
const productsRouter = express.Router();

// Endpoints

//Read products

productsRouter.get('/', getProducts);

productsRouter.get('/:id', getProductById);

//Create products
productsRouter.post(
	'/add-product',
	checkToken,
	onlyAdmin,
	uploadFile.array('productImg'),
	addProductValidator,
	addProduct
);

//add productColor(ONLY ADMIN)

//Update products

//delete products

module.exports = { productsRouter };

const express = require('express');

//Controllers
const {
	addProduct,
	getProducts,
	getProductById,
	deleteProduct,
	updateProduct,
} = require('./products.controller');

//Middlewares
const { addProductValidator } = require('./middlewares/products.validators');
const { checkToken } = require('../../middlewares/checkToken');
const { onlyAdmin } = require('../../middlewares/onlyAdmin');
const { uploadFile } = require('../../utils/handleStorage');
const { findProduct } = require('./middlewares/product.middleware');

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
	uploadFile.array('productImg', 4),
	addProductValidator,
	addProduct
);

//Update products

productsRouter.put('/:id', checkToken, onlyAdmin, findProduct, updateProduct);

productsRouter.delete(
	'/:id',
	checkToken,
	onlyAdmin,
	findProduct,
	deleteProduct
);

module.exports = { productsRouter };

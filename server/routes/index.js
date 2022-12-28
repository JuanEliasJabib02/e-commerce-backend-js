const express = require('express');
const { authRouter } = require('../components/auth/auth.routes');
const {
	categoryRouter,
} = require('../components/categories/categories.routes');
const { productsRouter } = require('../components/products/product.routes');
const {
	shoppingCartRouter,
} = require('../components/shopping-cart/cart.routes');

const router = express.Router();
//Routes
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);
router.use('/products', productsRouter);
router.use('/shopping-cart', shoppingCartRouter);

module.exports = { router };

const express = require('express');
const { authRouter } = require('../components/auth/auth.routes');
const {
	categoryRouter,
} = require('../components/categories/categories.routes');
const { productsRouter } = require('../components/products/product.routes');
const { uploadFile } = require('../utils/handleStorage');

const router = express.Router();
//Routes
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);
router.use('/products', productsRouter);

// Test upload
/* 
router.post('/testUpload', uploadFile.single('myfile'), (req, res, next) => {
	console.log('me ejecute');
});
 */
module.exports = { router };

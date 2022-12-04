const { handleHttpError } = require('../../utils/handleHttpError');
const { Products } = require('./models/products.model');

const addProduct = async (req, res, next) => {
	try {
		const { name, details, categoryId, price } = req.body;

		const productExist = await Products.findOne({
			where: {
				name,
				status: 'available',
			},
		});

		if (productExist) {
			return handleHttpError(res, 'PRODUCT_ALREADY_EXIST', 400);
		}

		const product = await Products.create({
			name,
			details,
			categoryId,
			price,
		});

		//Upload imgs

		res.status(201).json({
			data: {
				status: 'sucess',
				product,
			},
		});
	} catch (err) {
		next(err);
	}
};

const getProducts = async (req, res, next) => {
	try {
		const products = await Products.findAll({
			where: {
				status: 'available',
			},
			//Include imgs
		});
		res.status(200).json({
			data: {
				status: 'sucess',
				products,
			},
		});
	} catch (err) {
		next(err);
	}
};

const getProductById = async (req, res, next) => {
	try {
		const { id } = req.params;

		const product = await Products.findOne({
			where: {
				status: 'available',
				id,
			},
		});

		if (!product) {
			handleHttpError(res, 'PRODUCT_NOT_FOUND', 404);
		}

		// product size color

		res.status(200).json({
			data: {
				status: 'sucess',
				product,
			},
		});
	} catch (err) {
		next(err);
	}
};

module.exports = {
	addProduct,
	getProducts,
	getProductById,
};

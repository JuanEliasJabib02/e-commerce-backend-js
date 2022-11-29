const { handleHttpError } = require('../../utils/handleHttpError');
const { ProductColor } = require('./models/productColor.model');
const { Products } = require('./models/products.model');
const { ProductSize } = require('./models/productSize.model');

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

const addProductColor = async (req, res, next) => {
	try {
		const { color } = req.body;

		const findColorExist = await ProductColor.findOne({
			where: {
				color,
			},
		});

		if (findColorExist) {
			return handleHttpError(res, 'COLOR_ALREADY_EXIST', 400);
		}

		const productColor = await ProductColor.create({
			color,
		});

		res.status(201).json({
			status: 'succes',
			data: {
				productColor,
			},
		});
	} catch (error) {
		next(err);
	}
};

const addProductColorSize = async (req, res, next) => {
	try {
		const { productsId, productColorId, productSizeId } = req.body;

		console.log(productsId, productColorId, productSizeId);
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
		});
		//Include productSizeColor
		res.status(200).json({
			data: {
				status: 'sucess',
				products,
			},
		});
	} catch (err) {
		next(error);
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

const addProductSize = async (req, res, next) => {
	try {
		console.log('add Product Size');
		const { size } = req.body;

		const productSize = await ProductSize.create({
			size,
		});

		res.status(201).json({
			status: 'sucess',
			productSize,
		});
	} catch (err) {
		next(err);
	}
};
module.exports = {
	addProduct,
	addProductColor,
	addProductSize,
	addProductColorSize,
	getProducts,
	getProductById,
};

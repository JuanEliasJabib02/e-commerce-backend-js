const { handleHttpError } = require('../../utils/handleHttpError');
const { ProductImgs } = require('./models/productImgs.model');
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

		const imgs = req.files;

		if (imgs.length > 0) {
			imgs.map(async img => {
				return await ProductImgs.create({
					imgUrl: img.location,
					productsId: product.id,
				});
			});
		}

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
			include: [
				{
					model: ProductImgs,
					attributes: ['imgUrl'],
				},
			],
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
			include: [
				{
					model: ProductImgs,
					attributes: ['imgUrl'],
				},
			],
		});

		if (!product) {
			handleHttpError(res, 'PRODUCT_NOT_FOUND', 404);
		}

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

const deleteProduct = async (req, res, next) => {
	//Soft delete
	try {
		const { product } = req;

		console.log(product);

		await product.update({
			status: 'deleted',
		});

		res.status(204).json({
			status: 'succes',
		});
	} catch (error) {
		next(err);
	}
};

module.exports = {
	addProduct,
	getProducts,
	getProductById,
	deleteProduct,
};

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

module.exports = { addProduct };

const { handleHttpError } = require('../../../utils/handleHttpError');
const { Products } = require('../models/products.model');

const findProduct = async (req, res, next) => {
	try {
		const { id } = req.params;

		const product = await Products.findOne({
			where: {
				status: 'available',
				id,
			},
		});

		if (!product) {
			return handleHttpError(res, 'PRODUCT_NOT_FOUND', 404);
		}
		req.product = product;

		next();
	} catch (error) {
		next(error);
	}
};

module.exports = { findProduct };

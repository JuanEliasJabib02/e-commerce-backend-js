const { body } = require('express-validator');
const { validateResults } = require('../../../utils/handleValidators');

const addProductValidator = [
	body('name').notEmpty().withMessage('name cant be empty'),
	body('details').notEmpty().withMessage('details cant be empty'),
	body('categoryId')
		.notEmpty()
		.isNumeric()
		.withMessage('cant be empty and must be a number'),
	body('price').notEmpty().isNumeric().withMessage('price cant be empty'),
	// Validate result
	(req, res, next) => {
		return validateResults(req, res, next);
	},
];

module.exports = { addProductValidator };

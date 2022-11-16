const { handleHttpError } = require('../../utils/handleHttpError');
const { Categories } = require('./categories.model');

const getCategories = async (req, res, next) => {
	try {
		const categories = await Categories.findAll({
			where: {
				status: 'active',
			},
		});

		res.status(200).json({
			data: {
				categories,
			},
		});
	} catch (err) {
		next(err);
	}
};

const addCategory = async (req, res, next) => {
	try {
		const { name } = req.body;

		const categoryExist = await Categories.findOne({
			where: {
				name,
			},
		});

		if (categoryExist) {
			handleHttpError(res, 'CATEGORY_ALREADY_EXIST', 400);
		}

		const category = await Categories.create({
			name,
		});

		res.status(201).json({
			data: {
				category,
			},
		});
	} catch (err) {
		next(err);
	}
};

const updateCategoryName = async (req, res, next) => {
	try {
		const { name } = req.body;
		const { category } = req;

		console.log(category);

		await category.update({
			name,
		});

		res.status(204).json({
			status: 'sucess',
		});
	} catch (err) {
		next(err);
	}
};

const deleteCategory = async (req, res, next) => {
	try {
		const { category } = req;

		//Using soft delete
		await category.update({
			status: 'deleted',
		});

		res.status(204).json({
			status: 'succes',
		});
	} catch (err) {
		next(err);
	}
};

module.exports = {
	getCategories,
	addCategory,
	updateCategoryName,
	deleteCategory,
};

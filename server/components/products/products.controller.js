const addProduct = async (req, res, next) => {
	try {
		const { name, details, categoryId, price } = req.body;
		console.log(name, details, categoryId, price);
	} catch (err) {
		next(err);
	}
};

module.exports = { addProduct };

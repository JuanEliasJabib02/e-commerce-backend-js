const { Categories } = require('../components/categories/categories.model');
const {
	ProductImgs,
} = require('../components/products/models/productImgs.model');
const { Products } = require('../components/products/models/products.model');
const { Users } = require('../components/users/user.model');

const Models = {
	users: Users,
	categories: Categories,
	products: Products,
	productImgs: ProductImgs,
};

module.exports = { Models };

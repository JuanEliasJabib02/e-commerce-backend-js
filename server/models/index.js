const { Categories } = require('../components/categories/categories.model');
const {
	ProductColorSize,
} = require('../components/products/models/productColorSize.model');
const { Products } = require('../components/products/models/products.model');
const { Users } = require('../components/users/user.model');

const Models = {
	users: Users,
	categories: Categories,
	products: Products,
	productColorSize: ProductColorSize,
};

module.exports = { Models };

const { Categories } = require('../components/categories/categories.model');
const { Products } = require('../components/products/models/products.model');
const { Users } = require('../components/users/user.model');

const Models = {
	users: Users,
	categories: Categories,
	products: Products,
};

module.exports = { Models };

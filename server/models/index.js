const { Categories } = require('../components/categories/categories.model');
const {
	ProductColor,
} = require('../components/products/models/productColor.model');
const {ProductColorSize} = require('../components/products/models/productColorSize.model');
const {ProductImgs,} = require('../components/products/models/productImgs.model');
const { Products } = require('../components/products/models/products.model');
const {ProductSize} = require('../components/products/models/productSize.model');
const { Users } = require('../components/users/user.model');

const Models = {
	users: Users,
	categories: Categories,
	products: Products,
	productColorSize: ProductColorSize,
	productSize: ProductSize,
	productColor: ProductColor,
	productImgs: ProductImgs,
};

module.exports = { Models };

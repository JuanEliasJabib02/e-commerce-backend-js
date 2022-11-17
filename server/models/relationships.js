const { Products } = require('../components/products/models/products.model');
const {
	ProductColorSize,
} = require('../components/products/models/productColorSize.model');
const { Categories } = require('../components/categories/categories.model');
const {
	ProductColor,
} = require('../components/products/models/productColor.model');
const {
	ProductSize,
} = require('../components/products/models/productSize.model');
const {
	ProductImgs,
} = require('../components/products/models/productImgs.model');

const initRelationships = () => {
	Products.hasMany(ProductColorSize, { foreignKey: 'productsId' });
	ProductColorSize.belongsTo(Products);

	ProductColorSize.hasMany(ProductImgs, { foreignKey: 'productColorSizeId' });
	ProductImgs.belongsTo(ProductColorSize);

	//ProductColorSize has one Product Color

	ProductColor.hasOne(ProductColorSize);
	ProductColorSize.belongsTo(ProductColor);

	//ProductColorSize has one Product Size

	ProductSize.hasOne(ProductColorSize);
	ProductColorSize.belongsTo(ProductSize);
};

module.exports = { initRelationships };

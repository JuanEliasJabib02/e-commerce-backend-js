const {
	ProductImgs,
} = require('../components/products/models/productImgs.model');
const { Products } = require('../components/products/models/products.model');
const { Categories } = require('../components/categories/categories.model');
const initRelationships = () => {
	Products.hasMany(ProductImgs, { foreignKey: 'productsId' });
	ProductImgs.belongsTo(Products);

	Categories.hasOne(Products, { foreignKey: 'categoryid' });
	Products.belongsTo(Categories);
};

module.exports = { initRelationships };

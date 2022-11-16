const { DataTypes } = require('sequelize');
const { db } = require('../../../config/postgres');

const ProductColorSize = db.define('productColorSize', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		unique: true,
	},
	productsId: {
		type: DataTypes.INTEGER,
		allowNull: null,
	},
	productColorId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	productSizeId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	status: {
		type: DataTypes.ENUM(['available', 'soldOut']),
		defaultValue: 'available',
	},
});

module.exports = { ProductColorSize };

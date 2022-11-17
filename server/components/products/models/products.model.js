const { DataTypes } = require('sequelize');
const { db } = require('../../../config/postgres');

const Products = db.define('products', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		unique: true,
	},
	name: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	details: {
		type: DataTypes.STRING(200),
		allowNull: false,
	},
	categoryId: {
		type: DataTypes.INTEGER,
		allowNull: null,
	},
	price: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	status: {
		type: DataTypes.ENUM(['available', 'soldOut', 'deleted']),
		defaultValue: 'available',
	},
});

module.exports = { Products };

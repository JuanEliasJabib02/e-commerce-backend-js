const { DataTypes } = require('sequelize');
const { db } = require('../../../config/postgres');

const ProductImgs = db.define('productImgs', {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	},
	imgUrl: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	status: {
		type: DataTypes.ENUM(['active', 'deleted']),
		defaultValue: 'active',
	},
	productsId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

module.exports = { ProductImgs };

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
	productColorSizeId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	imgUrl: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	status: {
		type: DataTypes.ENUM(['active', 'deleted']),
		defaultValue: 'active',
	},
});

module.exports = { ProductImgs };

const { DataTypes } = require('sequelize');
const { db } = require('../../../config/postgres');

const ProductSize = db.define('productSize', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		unique: true,
	},
	size: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
});

module.exports = { ProductSize };

const { DataTypes } = require('sequelize');
const { db } = require('../../../config/postgres');

const ProductColor = db.define('productColor', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		unique: true,
	},
	color: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
});

module.exports = { ProductColor };


const { DataTypes } = require('sequelize')
const { db } = require('../../../../config/postgres')

const Product = db.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM([
      'available',
      'outstock',
    ]),
    defaultValue: 'available'
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

})

module.exports = { Product }
